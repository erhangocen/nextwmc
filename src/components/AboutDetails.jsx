import React from "react";
import RouterButton from "../product/RouterButton";
import AboutCard from "../product/AboutCard";
import denizImg from "../assets/img/deniz.jpeg"
import mehmetImg from "../assets/img/mehmet.jpeg"
import erhanImg from "../assets/img/erhan.jpeg"
import logo from "../assets/img/wmcLogooo.png"
import styles from "../styles/About.module.css";
import Image from "next/image";
import FadeAnimation from "@/product/FadeAnimation";
import Zoom from 'react-reveal/Zoom';
import { Fade } from "react-reveal";
import { FaAward, FaBriefcase, FaHeadset, FaCrown, FaArrowDown } from "react-icons/fa";
import LeadershipList from "@/product/Objects/LeadershipList";

export default function AboutDetails() {
  return (
    <section className={`${styles.about__details} section`} id="about" data-aos="fade-top">
      <Fade>
      <h2 className={`${styles.about__details__title} section__title`}>- Who We Are -</h2>
      <div className={`${styles.about__container} ${styles.about__details__container} container grid` }>
        <div className={"d-flex justify-content-center"}>
        <Image
        width="auto"
        height="auto"
          src={logo}
          alt="westernmoney__about"
          className={styles.about__img}
        />
        </div>
        <div className={styles.about__data}>
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
          <p className={`${styles.about__description} ${styles.about__leadership__description}` }>
          Western Money Consulting is a social media marketing agency
              located in West London. Our goal is to blend
              traditional marketing methods with cutting-edge technology to
              create both financial and leisure benefits for our clients.
          </p>
          <div className={styles.leadership__scroll} data-aos="fade-top">
            <a href="#leadership" className={`${styles.leadership__scroll_button} button__flex text-white`}>
              <FaCrown className={`${styles.leadership__scroll_mouse}`}/>
              <span className={styles.leadership__scroll_name}>Our Team</span>
              <FaArrowDown className={`${styles.leadership__scroll_arrow}`}/>
            </a>
          </div>
        </div>
        
      </div>
</Fade>

      <div className={styles.leadership__section} id="leadership">
        <h2 className={`section__title ${styles.leadership__title}` }>- Leadership -</h2>

        {
          LeadershipList.map((leadership)=>(
            <AboutCard 
              name={leadership.name} 
              right={leadership.right} 
              imageSrc={leadership.imageSrc}
              experience={leadership.experience}
              consuled={leadership.consuled}
              support={leadership.support}
              about={leadership.about}
              linkedin={leadership.linkedin}
              twitter={leadership.twitter}
              instagram={leadership.instagram}
            />
          ))
        }
      </div>
    </section>
  );
}
