import React, { useEffect, useState } from "react";
import styles from "../styles/BasicHeader.module.css"
import BasicHeader from "../product/BasicHeader";
import Link from "next/link";
import ActiveNavLink from "@/product/ActiveNavLink";
import { FaBriefcase, FaHome, FaPaperPlane, FaUserAlt, FaWrench } from "react-icons/fa";

export default function ExpandedHeader() {

  return (
    <BasicHeader>
      <ul className={`${styles.nav__list} grid`}>
        <li className={styles.nav__item}>
          <Link href="/" className={`${styles.nav__link} ${styles.active__expanded__nav_buthrefn} nav__link`}>
            <FaHome className={`${styles.nav__icon}`}/> Home
          </Link>
        </li>

        <li className={styles.nav__item}>
          <ActiveNavLink href="/about">
            <FaUserAlt className={`${styles.nav__icon}`}/>About Us
          </ActiveNavLink>
        </li> 

        <li className={styles.nav__item}>
          <ActiveNavLink href="/services">
            <FaWrench className={`${styles.nav__icon}`}/> Services
          </ActiveNavLink>
        </li>

        <li className={styles.nav__item}>
          <ActiveNavLink href="/testimonials">
          <FaBriefcase className={`${styles.nav__icon}`}/>Testimonials
          </ActiveNavLink>
        </li>

        <li className={styles.nav__item}>
          <a href="#contact" className={`${styles.nav__link} nav__link`}>
          <FaPaperPlane className={`${styles.nav__icon}`}/>Contact
          </a>
        </li>
      </ul>
    </BasicHeader>
  );
}
