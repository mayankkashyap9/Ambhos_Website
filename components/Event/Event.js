import styles from './Event.module.css';
import Link from 'next/link';
import Head from 'next/head';
import Ongoing  from './ongoing';
import History from './history';
import React, { useState } from 'react';

function Event() {

  let count="";
   const [bg,setBg]=useState(count);
 const bgChange=() =>{
   setBg("Ongoing");
   if(bg==="Ongoing"){
     return(<Ongoing/>);
   }

 }

      const bgChange2=()=>{
        setBg("History")
        if(bg==="History")
       {
         return(<History />);
       }
      }


      function abc(){



       if(bg==="History")
      {
        return(<History />);
      }
      else if(bg==="Ongoing"){
        return(<Ongoing/>);
      }
     else if(bg===""){

        return (<Ongoing />);
      }
    }
    return (
        <>

        <Head>

        </Head>

            <div className={styles.eventMain}>
               <p className={styles.subscription}>Your subscription</p>
               <p className={styles.yourevents}><strong>Find Your Events</strong></p>
               <div className={styles.container_event}>
                <li className={styles.event_link_out}>

                <Link  href="#">
                <a  onClick={bgChange} className={styles.event_link}>Ongoing</a>
                </Link></li>
                <li className={styles.event_link_out}>
                <Link href="#">
                <a onClick={bgChange2}  className={styles.event_link}>History</a>
                </Link></li>

               </div>


            </div>

             <div>
                 {abc()}

             </div>


        </>

    )
}

export default Event;
