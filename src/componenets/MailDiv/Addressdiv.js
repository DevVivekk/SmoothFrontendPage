"use client"
import React from 'react'
import { AiFillAudio } from "react-icons/ai";
import styles from './mail.module.scss';
import { RxCross2 } from "react-icons/rx";

const AddressMail = () => {
  return (
    <div style={{"height":"60rem","marginTop":"-6rem"}} className={styles['mail-mail-div-main']}>
        <section>
            {/* footer bar */}
            <div>
            <span>See My availability: today</span>
            </div>
            <AiFillAudio size={'2rem'} />
        </section>
        <div className={styles['mail-body-div']}>
            {/* body bar */}
            <h2 className={styles['mail-title']}>Available until 1pm</h2>
            <p>Would you like to create an event for coffee with marisa at 11 Am?</p>
            <article>Was wondering if youd'be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, although I think you guys would really get along!</article>
            <p>Marisa</p>
            <div className={styles['mail-buttons']}>
                {/* buttons */}
                <button>Create Event</button>
                <button>Add Event</button>
                <button>Full Calender</button>
                <button>Dismiss</button>
            </div>
            <div className={styles['mail-moreactions']}>
            <RxCross2 size={'1rem'} /><span>More actions</span>
            </div>
        </div>
    </div>
  )
}

export default AddressMail