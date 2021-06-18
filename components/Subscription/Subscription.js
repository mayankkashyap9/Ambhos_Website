import React from 'react'
import Styles from './Subscription.module.css';
import {Button} from '@material-ui/core';
function Subscription() {
    return (
        <div className={Styles.main}>
            <div className={Styles.subscription}>
                <h1 className={Styles.heading}>Get a Subscription<br/>today!</h1>
                <p className={Styles.para}>book your subscription today, and enjoy free services</p>
                <Button className={Styles.button}>Enroll</Button>
            </div>
            <p className={Styles.paraTwo}>Lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor sit amet, consectetur adipiscing elit.elit.</p>
        </div>
    )
}

export default Subscription
