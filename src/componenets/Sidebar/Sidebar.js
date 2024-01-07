"use client"
import React from 'react'
import styles from '@/Styles/Sidebarstyling/sidebar.module.scss'
const Sidebar = ({handleRender}) => {
  const handleClick = (item)=>{
    handleRender(item);
  }
  return (
    <div className={styles['sidebar-main']}>
        <section>
            <ul>
                <li onClick={()=>handleClick('new-flow')} id='new-flow'>+ New Flow</li>
                <li id='coffee'>Coffee? Marisa Lu</li>
                <li onClick={()=>handleClick('location')}  id='location'>Feedback Lindsey Weiss</li>
                <li onClick={()=>handleClick('location')} >Post-grad plans Evelyn Me</li>
                <li onClick={()=>handleClick('location')} >Launch Plan Denis Jin</li>
                <li onClick={()=>handleClick('location')} >Victoria Wang</li>
                <li onClick={()=>handleClick('location')} >Advait Kalakkad</li>
                <li onClick={()=>handleClick('location')} >Danny Trith</li>
            </ul>
        </section>
    </div>
  )
}

export default Sidebar