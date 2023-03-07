"use client"
import { React, useState, useEffect } from "react";
import BasicHeader from "../product/BasicHeader";
import styles from "../styles/BasicHeader.module.css"
import dynamic from "next/dynamic";
import { FaBriefcase, FaHome, FaPaperPlane, FaUserAlt, FaWrench } from "react-icons/fa";

export default function LendingHeader() {

  const [sections, setSections] = useState([]);

  useEffect(() => {
    setSections(document.querySelectorAll("section[id]"))
  },[]);

  const scrollActive = () => {
    const scrollY = window.pageYOffset; 

    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight,
        sectionTop = current.offsetTop - 58,
        sectionId = current.getAttribute("id"),
        sectionsClass = document.querySelector(
          ".nav__menu a[href*=" + sectionId + "]"
        ); 

      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add(styles.active_link);
      } else {
        sectionsClass?.classList.remove(styles.active_link);
      }
    });
  };
  useEffect(() => {
    window.addEventListener("scroll", scrollActive);
  });
  

  return (
    <BasicHeader>
      <ul className={`${styles.nav__list} grid`}>
        <li className={styles.nav__item}>
          <a href="#home" className={`${styles.nav__link} ${styles.active_link} nav__link active_link`}>
          <FaHome className={`${styles.nav__icon}`}/> Home
          </a>
        </li>

        <li className={styles.nav__item}>
          <a href="#about" className={`${styles.nav__link} nav__link`}>
          <FaUserAlt className={`${styles.nav__icon}`}/> About Us
          </a>
        </li>

        <li className={styles.nav__item}>
          <a href="#services" className={`${styles.nav__link} nav__link`}>
          <FaWrench className={`${styles.nav__icon}`}/> Services
          </a>
        </li>

        <li className={styles.nav__item}>
          <a href="#testimonial" className={`${styles.nav__link} nav__link`}>
          <FaBriefcase className={`${styles.nav__icon}`}/> Testimonials
          </a>
        </li>

        <li className={styles.nav__item}>
          <a href="#contact" className={`${styles.nav__link} nav__link`}>
          <FaPaperPlane className={`${styles.nav__icon}`}/> Contact
          </a>
        </li>
      </ul>
    </BasicHeader>
  );
}
