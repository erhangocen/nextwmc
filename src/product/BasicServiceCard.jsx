'use client';
import React from 'react'
import styles from "../styles/Services.module.css"
import Image from 'next/image';
import { FaArrowRight } from 'react-icons/fa';

export default function BasicServiceCard(props) {
  return (
    <div className={styles.services__card}>
        <Image alt='westernmoney__service' src={props.imgSrc} width="100" height="100"/>
        <h3 className={styles.services__title}>{props.title}</h3>

        <span className={styles.services__button} onClick={props.clickAction}>
            <span className={styles.services__detail}>See More</span>
            <FaArrowRight className={`${styles.services__icon}`}/>
        </span>
    </div>
  )
}
