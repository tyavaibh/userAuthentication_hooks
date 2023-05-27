import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Signin_img } from './Signin_img'
import { useNavigate } from 'react-router-dom'
import { NavLink } from "react-router-dom"
import { Details } from "./Details";

export const Login = () => {

    const [inpVal, setinpVal] = useState({
        email: '',
        password: ''
    })

    const [login,setLogin] = useState({exName : '', exEmail : '' , session : 0});

    const sessionFunc =(n,e,s) =>{
        setLogin({...login, 
            exName:n,
            exEmail:e,
            session:s})
    }

    const getData = (e) => {
        const { name, value } = e.target;

        setinpVal(
            () => {
                return {
                    ...inpVal,
                    [name]: value
                }
            }
        )
    }


    const addData = (e) => {
        e.preventDefault(); //default behaviour of click button event is stopped with this statement

        const { email, password } = inpVal;

        const existingUser = localStorage.getItem(email);
        // console.log("existingUser", existingUser)
        const existingUserData = JSON.parse(existingUser)
        // console.log("existingUserData", existingUserData)

        if (email === '') {
            alert('email field is required')
        }
        else if (!email.includes('@')) {
            alert('email is not valid!')
        }
        else if (password === '') {
            alert('password field is required')
        }
        else if (password.length < 5) {
            alert('password is too short, pleasecheck!')
        }
        else {
            if (existingUserData && (existingUserData.email === email) && (existingUserData.password === password)) {
                // localStorage.setItem(`${email}Login`, JSON.stringify('Yes'))
                sessionFunc(existingUserData.name,existingUserData.email,1)
                
            } else {
                alert("username or password doesn't matches")
            }
        }
    
    }

    return (
        <>
            { login.session ? <Details login={login} sessionFunc={sessionFunc}/> :
            
            <div className="container mt-3">
                <section className='d-flex justify-content-between'>
                    <div className="left_data mt-3" style={{ width: '100%' }}>
                        <h3 className="text-center col-lg-6">
                            Sign In!
                        </h3>
                        <Form>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                                <Form.Control name='email' type="email" onChange={getData} placeholder="Enter your email" />
                            </Form.Group>

                            <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                                <Form.Control name='password' type="password" onChange={getData} placeholder="enter your Password" />
                            </Form.Group>

                            <Button onClick={addData} variant="primary" className="col-lg-6" style={{ background: 'rgb(67,185,127)' }} type="submit">
                                Submit
                            </Button>
                        </Form>
                        <p className='mt-3'>Don't have an account <span><NavLink to='/'>SignUp</NavLink></span></p>
                    </div>

                    <Signin_img />

                </section>
            </div> 
            }
        </>
    )
}
