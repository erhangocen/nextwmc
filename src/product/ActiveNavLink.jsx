import Link from 'next/link'
import {React, useState, useEffect} from 'react'
import styles from "../styles/BasicHeader.module.css"
import { useRouter } from 'next/router'

export default function ActiveNavLink({children, ...props}) {

    const router = useRouter();
    const path = router.pathname;

    const handleClick = (e) => {
      e.preventDefault()
      router.push(props.href)
    }

  return (

        <a 
          onClick={handleClick}
        className={`${styles.nav__link} 
        nav__link 
        ${path==props.href?styles.active_link : null }`}>{children}</a>
        
  )
}
