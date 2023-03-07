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
        <AboutCard 
          name="Mehmet Toptaş" 
          right={false} 
          imageSrc={mehmetImg}
          experience="5+ Years"
          consuled="20+ Business"
          support="Online 7/24"
          about="I'm Mehmet Toptaş, A loudmouth who is highly disciplined, won the war with himself and started the war against the world, and is known for adapting quickly and getting out of the situations somehow. I don't like excuses and I always move forward to reach the goal. I never hesitate to do extraordinary things for my ideals and mission. I think it must be due to my upbringing. I grew up accepting that if I wanted something, I had to fight for it. And that fight seems to continue a lifetime."
        />
        <AboutCard 
          name="Erhan Göcen" 
          right={true} 
          imageSrc={erhanImg}
          experience="4+ Years"
          consuled="10+ Business"
          support="Online 7/24"
          about="I've been started developing software projects since early high school.
            Besides that, I've been interested SEO, social media marketting and advertising.
            Now, I am studying at university and freelancing.
            As my teachers always say, I am a very hardworking person.
            I am successful in my studieds and working about developing web application, SEO and marketting at the same time.
            I am young, ambitious and hardworking. Despite my young age, my experience in my job is quite high. No one ever regretted choosing me before.
            "
        />
        <AboutCard 
          name="Deniz Mengüş" 
          right={false}
          imageSrc={denizImg}
          experience="3+ Years"
          consuled="10+ Business"
          support="Online 7/24"
          about="Hi, I am Deniz. Thats it."
        />
      </div>
    </section>
  );
}
