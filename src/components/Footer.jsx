import React from 'react'
import styles from "../styles/Footer.module.css"
import Link from 'next/link'
import { FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter, } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className={styles.footer}>
        <div className={`${styles.footer__container} container`}>
            <ul className={styles.footer__list}>
                <li>
                    <Link href="about" className={styles.footer__link}>About</Link>
                </li>
                <li>
                    <Link href="services" className={styles.footer__link}>Services</Link>
                </li>
                <li>
                    <Link href="testimonials" className={styles.footer__link}>Testimonials</Link>
                </li>
                <li>
                    <Link href="policy" className={styles.footer__link}>Policy</Link>
                </li>
            </ul>

            <ul className={styles.footer__social}>
                <li><a href="https://www.facebook.com/westernmoneyconsulting/" target="_blank" className={styles.footer__social_link}>
                    <FaFacebookF><span className={"hidden__social__name"}>Western Money</span></FaFacebookF> 

                </a></li>
                <li><a href="https://twitter.com/wmc_agency" target="_blank" className={styles.footer__social_link}>
                <FaTwitter><span className={"hidden__social__name"}>Western Money</span></FaTwitter>
                </a></li>
                <li><a href="https://www.linkedin.com/company/western-money-consulting" target="_blank" className={styles.footer__social_link}>
                <FaLinkedinIn><span className={"hidden__social__name"}>Western Money</span></FaLinkedinIn>
                </a></li>
                <li><a href="https://www.instagram.com/westernmoneyconsulting/" target="_blank" className={styles.footer__social_link}>
                <FaInstagram><span className={"hidden__social__name"}>Western Money</span></FaInstagram>
                </a></li> 
            </ul>
        </div>
        <div className={styles.footer__address}>
            <div>
                London (West End), 85 Great Portland Street
            </div>
            <div style={{fontFamily:"serif"}}>
                +1 (516) 980-3162
            </div>
        </div>
    </footer>
  )
}
