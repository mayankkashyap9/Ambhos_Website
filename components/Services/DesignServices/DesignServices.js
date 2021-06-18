import React from 'react'
import Styles from './DesignServices.module.css';

function DesignServices({Imagetag, title}) {
    return (
        <div className={Styles.main}>
            <div className={Styles.inl}>
            <img src={Imagetag} alt="" className={Styles.image}/>
            <h5 className={Styles.heading}>{title}</h5>
            </div>
        </div>
    )
}

export default DesignServices
