import React, { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";
import styles from "../styles/About.module.css"
import Image from "next/image";
import Zoom from 'react-reveal/Zoom';
import { FaAward, FaBriefcase, FaHeadset } from "react-icons/fa";

export default function AboutCard(props) {
  const [inMobile, setInMobile] = useState(false);

  useEffect(() => {
    var mobile = require("is-mobile")
    setInMobile(mobile())
  },[]);

  return (
    <Zoom>
      <div className={styles.leadership__container} data-aos="fade-top">
        <div
          className={
            props.right
              ? `${styles.right__leadership} row w-100`
              : `${styles.left__leadership} row w-100`
          }
        >
          {!props.right || inMobile ? (
            <Image
              width="auto"
              height="auto"
              src={props.imageSrc}
              alt="westernmoney__about"
              className={`${styles.about__img} ${styles.leadership__img} col-6`}
            />
          ) : null} 
          <div className={`${styles.leadership__data} col-6`}>
            <div className={styles.about__data}>
              <div className={styles.about__info}>
                <div className={styles.about__box}>
                <FaAward className={`${styles.about__icon}`}/>
                  <h3 className={styles.about__title}>Experience</h3>
                  <span className={styles.about__subtitle}>{props.experience}</span>
                </div>

                <div className={styles.about__box}>
                <FaBriefcase className={`${styles.about__icon}`}/>
                  <h3 className={styles.about__title}>Consuled</h3>
                  <span className={styles.about__subtitle }>{props.consuled}</span>
                </div>

                <div className={styles.about__box}>
                <FaHeadset className={`${styles.about__icon}`}/>
                  <h3 className={styles.about__title}>Support</h3>
                  <span className={styles.about__subtitle}>{props.support}</span>
                </div>
              </div>
              <div className={styles.leadership__description__title}>{props.name}</div>
              <p className={`${styles.about__description} ${styles.leadership__description}`}>
                {props.about}
              </p>
            </div>
          </div>
          
          {props.right && !inMobile ? (
            <Image
              width="auto"
              height="auto"
              src={props.imageSrc}
              alt="westernmoney__about"
              className={`${styles.about__img} ${styles.leadership__img} col-6`}
            />
          ) : null}
        </div>
      </div>
    </Zoom>
  );
}
