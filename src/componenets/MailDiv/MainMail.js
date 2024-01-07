import React from 'react'
import Mail from './Mail'
import AddressMail from './Addressdiv'
import styles from './mail.module.scss'
import Location from './Location'
const MainMail = () => {
  return (
    <div style={{"display":"flex","flexDirection":"row","justifyContent":"space-between","maxWidth":"70vw","height":"70rem","minWidth":"50rem","overflow":"auto","position":"relative","top":"-5rem"}}>
    <div className={styles['mail-mail-combine-div']} style={{ width: '70vw'}}>
        <Mail />
      </div>
      <div className={styles['mail-mail-combine-div']} style={{ width: '70vw',"marginLeft":"10rem"}}>
        <AddressMail />
      </div>
      <div className={styles['mail-mail-combine-div']} style={{ width: '70vw',"marginLeft":"10rem"}}>
        <Location />
      </div>
    </div>
  )
}

export default MainMail