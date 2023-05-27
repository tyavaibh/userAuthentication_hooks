import React, { useState, useEffect } from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
 import styles from "./Details.module.css"

export const Details = ({login,sessionFunc}) => {

    return (

            <>
            <div className={styles.mainDiv}>
                <h3 className={styles.text}>Welcome {login.exName}!</h3>
                <br/>
                <button className={styles.btn} onClick = {()=>sessionFunc(null,null,0)} >Logout</button>
            </div>
            </>
    )
}
