'use client';
import React from 'react'
import RouterButton from '../product/RouterButton'
import styles from "../styles/About.module.css"
import logo from "../assets/img/wmcLogooo.png"
import Image from 'next/image';
import FadeAnimation from '@/product/FadeAnimation';
import { FaAward, FaBriefcase, FaHeadset } from "react-icons/fa";



export default function About() {
  return (
    <section className={`${styles.about} ${styles.section} about section`} id="about" >
        <h2 className={`${styles.section__title} section__title`}>About Us</h2>
        <div className={`${styles.about__container} ${styles.container} ${styles.grid} about__container container grid`}>
            <div className={"d-flex justify-content-center"}>
            <FadeAnimation left>
                <Image src={logo} alt="westernmoney__about" className={styles.about__img}/>
            </FadeAnimation>
            </div>
            <FadeAnimation right>
            <div className={styles.about__data} >
                <div className={styles.about__info}>
                    <div className={styles.about__box}>
                    <FaAward className={`${styles.about__icon}`}/>
                        <h3 className={styles.about__title}>Experience</h3>
                        <span className={styles.about__subtitle}>3+ Years</span>
                    </div>

                    <div className={styles.about__box}>
                        <FaBriefcase className={`${styles.about__icon}`}/>
                        <h3 className={styles.about__title}>Consuled</h3>
                        <span className={styles.about__subtitle }>10+ Business</span>
                    </div>

                    <div className={styles.about__box}>
                        <FaHeadset className={`${styles.about__icon}`}/>
                        <h3 className={styles.about__title}>Support</h3>
                        <span className={styles.about__subtitle}>Online 7/24</span>
                    </div>
                </div>
                <p className={styles.about__description}>
                Western Money Consulting is a social media marketing agency
              located in West London. Our goal is to blend
              traditional marketing methods with cutting-edge technology to
              create both financial and leisure benefits for our clients.
                </p>
                <div className={styles.about__buttons}>
                    <RouterButton text="Learn More About Us" href="/about"/>
                </div>
            </div>
            </FadeAnimation>
        </div>
    </section>
  )
}
