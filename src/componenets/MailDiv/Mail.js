import React from 'react'
import { IoMailSharp } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";
import styles from './mail.module.scss';
import { RxCross2 } from "react-icons/rx";
const Mail = () => {
  return (
    <div className={styles['mail-mail-div-main']}>
        <section>
            {/* footer bar */}
            <div>
            <IoMailSharp size={'2rem'} />
            <span>Coffee?. Mail from Marisa Lu</span>
            </div>
            <AiFillAudio size={'2rem'} />
        </section>
        <div className={styles['mail-body-div']}>
            {/* body bar */}
            <div className={styles['heading-name-time']}>
            <span className={styles['mail-heading']}>Marisa Lu</span><span>Just now</span>
            </div>
            <h2 className={styles['mail-title']}>Coffee ?</h2>
            <p>Hey Jason,</p>
            <article>Was wondering if youd'be interested in meeting my team at Philz Coffee at 11 AM today. No pressure if you can't make it, although I think you guys would really get along!</article>
            <p>Marisa</p>
            <div className={styles['mail-buttons']}>
                {/* buttons */}
                <button>Reply</button>
                <button>Forward</button>
                <button>Delete</button>
            </div>
            <div className={styles['mail-moreactions']}>
            <RxCross2 size={'1rem'} /><span>More actions</span>
            </div>
        </div>
    </div>
  )
}

export default Mail