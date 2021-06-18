
import React from 'react'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Styles from './Header.module.css';
import { Button } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

function header() {
    return (
       <div className={Styles.Header_section}>
            <div className={Styles.Header_left}>
                  <img src="/Images/logo.png" alt="" />
                   {/*add a logo image here and remove that h1 of ambhos*/}
            </div>
            <div className={Styles.Header_right}>
                 <div className={Styles.dropdown}>
                       <h5 className={Styles.Header_right_heading_dropdown_mobile}>MORE <ArrowDropDownIcon /></h5>
                       <div className={Styles.Header_dropdown_more}>
                            {/* dropdown for more will be created */}
                            <a href="#services">SERVICES</a>
                            <a href="#event">EVENTS</a>
                            <a href="#care">CARE</a>
                            <a href="#consult">CONSULT</a>
                       </div>
                 </div>


                 <div className={Styles.dropdown}>
                       <h5 className={Styles.Header_right_heading_dropdown}>SERVICES <ArrowDropDownIcon /></h5>
                       <div className={Styles.Header_dropdown_services}>
                            {/* dropdown for services will be created */}
                            <a href="#gym">GYM</a>
                            <a href="#yoga">YOGA</a>
                            <a href="#dance">DANCE</a>
                            <a href="#karate">KARATE</a>
                            <a href="#trekking">TREKKING</a>
                       </div>
                 </div>
              
                 <h5 className={Styles.Header_right_heading}><a href="#event">EVENTS</a></h5>
                 <h5 className={Styles.Header_right_heading}><a href="#care">CARE</a></h5>
                 <h5 className={Styles.Header_right_heading}><a href="#consult">CONSULT</a></h5>
                    
                 <Button>LOGIN</Button>   
                 <Button className={Styles.button_design}>SIGNUP</Button>
                 <SearchIcon className={Styles.searchButton}/>
            </div>
       </div>
    )
}
export default header
