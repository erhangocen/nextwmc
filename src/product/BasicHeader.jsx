'use client';
import React, { useEffect, useState } from 'react'
import logoo from '../assets/img/wmcLogooo.png'
import styles from "../styles/BasicHeader.module.css"
import Link from 'next/link';
import Image from 'next/image';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function BasicHeader({children}) {

  const [navMenu, setNavMenu] = useState();
  const [navToggle, setNavToggle] = useState();
  const [navClose, setNavClose] = useState();
  const [navState, setNavState] = useState(false);
  const [navLink, setNavLink] = useState([]);
  
  useEffect(() => {
    setNavMenu(document.getElementById("nav-menu"));
    setNavToggle(document.getElementById("nav-toggle"));
    setNavClose(document.getElementById("nav-close"));
    setNavLink(document.querySelectorAll(".nav__link"));
  }, []);

  useEffect(() => {
    if(navState){
      navClose.classList.add(styles.show_button)
    }
  }, [navState]);

  if (navLink) {
    navLink.forEach((n) =>
      n.addEventListener("click", () => {
        navMenu.classList.remove(styles.show_menu);
        setNavState(false);
      })
    );
  }

  if (navToggle) {
    navToggle.addEventListener("click", () => {
      navMenu.classList.add(styles.show_menu);
      setNavState(true);
    });
  }

  if (navClose) {
    navClose.addEventListener("click", () => {
      navMenu.classList.remove(styles.show_menu);
      setNavState(false);
    });
  }

  function linkAction(){
      navMenu.classList.remove(styles.show_menu)
  }
  navLink.forEach(n => n.addEventListener('click', linkAction))

  function scrollHeader(){
    const scrollUp = document.getElementById('header');
      this.scrollY >= 20 ? scrollUp.classList.add('scroll_header'):scrollUp?.classList?.remove('scroll_header')
  }
  
  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
  },);


  return (
    <header className={`${styles.header} header`} id="header">
        <nav className={`${styles.nav} container`}>
            <Link style={{display:"contents"}} href="/" onClick={()=>{window.scrollTo(0, 0);}}>
              <Image id="logo" src={logoo} alt="westernmoney__header" srcSet="" width="100" height="100"/>
            </Link>

            <div className={`${styles.nav__menu} nav__menu`} id="nav-menu">
                {children}
                <FaTimes className={`${styles.nav__close}`} id="nav-close"/>
            </div>
            <div className={styles.nav__btns}>
              <div className={`${styles.nav__toggle} show_button`} id="nav-toggle">
                  <FaBars/>
              </div>
            </div>
        </nav>
    </header>
  )
}
