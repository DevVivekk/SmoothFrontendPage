"use client"
import Sidebar from '@/componenets/Sidebar/Sidebar'
import React, { useCallback, useState } from 'react'
import styles from '@/app/page.module.scss'
import Location from '@/componenets/MailDiv/Location'
import MainMail from '@/componenets/MailDiv/MainMail'
const Page = () => {
  const [returnComp, setReturnComp] = useState("");
  const handleRender = useCallback((id)=>{
    console.log(id)
    setReturnComp(id);
  },[]);
  return (
    <div className={styles['home-page']}>
       <h1 className={styles['heading-page-ele']}>Review Inbox</h1>
       <section className={styles['side-and-main-div']}>
       <Sidebar handleRender={handleRender} />
       {/* {returnComp && (
          returnComp === 'new-flow' ? <Mail /> : <Location />
        )} */}
        {renderComponentBasedOnCondition(returnComp)}
       </section>
    </div>
  )
}
export default Page

const renderComponentBasedOnCondition = (condition) => {
  switch (condition) {
    case 'new-flow':
      return <MainMail />;
    case 'location':
      return <Location />;
    // Add more cases as needed
    // ...

    // If no case matches, return null or another fallback component
    default:
      return <MainMail />;
  }
};