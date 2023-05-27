import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Signin_img } from './Signin_img'
import {NavLink} from "react-router-dom"
import {useNavigate} from "react-router-dom"

export const Home = () => {

    const [inpVal, setinpVal] = useState({
        name: '', 
        email: '',
        date: '',
        password: ''
    })

    const history = useNavigate()

    const getData = (e) => {
        const { name, value } = e.target;

        setinpVal(
            ()=>{
                return {
                    ...inpVal,
                    [name] : value
                }
            }
        )
    }

    const addData = (e) =>{
        e.preventDefault(); //default behaviour of click button event is stopped with this statement
        
        const {name,email,date,password} = inpVal;

        if(name===''){
            alert('name field is required')
        }
        else if(email===''){
            alert('email field is required')
        }
        else if(!email.includes('@')){
            alert('email is not valid!')
        }
        else if(password===''){
            alert('password field is required')
        }
        else if(password.length<5){
            alert('password is too short, pleasecheck!')
        }
        else if(date===''){
            alert('date field is required')
        }else{
            
            const existingUser = localStorage.getItem(email);

            if(existingUser){
                alert('User id already registered!')
            }else{
                localStorage.setItem(email,JSON.stringify(inpVal))
                history('/login')
            }
        }
    }
    

    return (
        <div className="container mt-3">
            <section className='d-flex justify-content-between'>
                <div className="left_data mt-3" style={{ width: '100%' }}>
                    <h3 className="text-center col-lg-6">
                        Sign Up!
                    </h3>
                    <Form>
                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicName">
                            <Form.Control name='name' type="text" onChange={getData} placeholder="Enter your name" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
                            <Form.Control name='email' type="email" onChange={getData} placeholder="Enter your email" />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicDate">
                            <Form.Control name='date' type="date" onChange={getData} />
                        </Form.Group>

                        <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
                            <Form.Control name='password' type="password" onChange={getData} placeholder="enter your Password" />
                        </Form.Group>

                        <Button onClick={addData} variant="primary" className="col-lg-6" style={{ background: 'rgb(67,185,127)' }} type="submit">
                            Submit
                        </Button>
                    </Form>
                    <p className='mt-3'>Already have an account <span><NavLink to='/login'>SignIn</NavLink></span></p>
                </div>

                <Signin_img />

            </section>
        </div>
    )
}

export default Home;