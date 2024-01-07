"use client"
import React from 'react'
import { AiFillAudio } from "react-icons/ai";
import styles from './mail.module.scss';
import { RxCross2 } from "react-icons/rx";
import { FaLocationDot } from "react-icons/fa6";
const Location = () => {
  return (
    <div style={{"height":"60rem","width":"48vw"}} className={styles['mail-mail-div-main']}>
        <section style={{"height":"10rem"}}>
            {/* footer bar */}
            <div>
            <FaLocationDot size={'2rem'} />
            <span>Philz Coffee: Location</span>
            </div>
            <AiFillAudio size={'2rem'} />
        </section>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.89796604795!2d77.04416917367676!3d28.52755441104535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1704651144874!5m2!1sen!2sin" width="600" height="450"  allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        <div className={styles['mail-body-div']}>
            {/* body bar */}
            <div className={styles['heading-name-time']}>
            {/* <span className={styles['mail-heading']}>Marisa Lu</span><span>Just now</span> */}
            </div>
            <h2 style={{"margin":"2rem 0rem"}} className={styles['mail-title']}>Philz Coffee</h2>
            <p>Custom blended java in a casual setting</p>
            <article style={{"margin":"2rem 0rem"}}>20086, Steven Creek Bivd, Cupertino CA 95014</article>
            <div className={styles['mail-buttons']}>
                {/* buttons */}
                <button>Get directions</button>
                <button>See details</button>
                <button>Find more cafes nearby</button>
            </div>
            <div className={styles['mail-moreactions']}>
            <RxCross2 size={'1rem'} /><span>More actions</span>
            </div>
        </div>
    </div>
  )
}

export default Location