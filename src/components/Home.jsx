"use client";
import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import styles from "../styles/Home.module.css";
import RouterButton from "../product/RouterButton";
import Fade from "react-reveal/Fade";
import Reveal from "react-reveal/Reveal";
import FadeAnimation from "@/product/FadeAnimation";
import videoBgPoster from "../assets/img/videoBgPoster.png";
import { FaArrowDown, FaCalendarAlt, FaHome, FaFacebookF, FaInstagram, FaLinkedinIn, FaTwitter } from "react-icons/fa";

export default function Home() {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "med spas",
        "permanent make-up artists",
        "estheticans",
        "divorce lawyers",
        "construction firms",
        "realtors",
        "dentists",
      ], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 600,
      typeSpeed: 60,
      backSpeed: 20,
      backDelay: 650,
      loop: true,
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);


  document.addEventListener("DOMContentLoaded", function() {
    var lazyVideos = [].slice.call(document.querySelectorAll("video.lazy"));
  
    if ("IntersectionObserver" in window) {
      var lazyVideoObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(video) {
          if (video.isIntersecting) {
            for (var source in video.target.children) {
              var videoSource = video.target.children[source];
              if (typeof videoSource.tagName === "string" && videoSource.tagName === "SOURCE") {
                videoSource.src = videoSource.dataset.src;
              }
            }
  
            video.target.load();
            video.target.classList.remove("lazy");
            lazyVideoObserver.unobserve(video.target);
          }
        });
      });
  
      lazyVideos.forEach(function(lazyVideo) {
        lazyVideoObserver.observe(lazyVideo);
      });
    }
  });

  return (
    <section className={`${styles.home} section`} id="home">
      <div>
        <video
          className={`${styles.videoBg} lazy`}
          autoPlay
          loop
          muted
          playsInline
          poster={videoBgPoster}
        >
          <source src="/bgVideo.mp4"/>
          <source src="/bgVideo.webm"/>
        </video>
      </div>
      <div className={`${styles.home__container} container grid`}>
        <div className={styles.home__content}>
          <FadeAnimation left duration={3000} delay={300}>
            <div className={styles.home__social}>
              <a
                href="https://www.linkedin.com/company/western-money-consulting"
                target="_blank"
                className={styles.home__social_icon}
                rel="nofollow"
              >
                <span className={"hidden__social__name"}>Western Money</span>
                <FaLinkedinIn/>
              </a>
              <a
                href="https://www.facebook.com/westernmoneyconsulting/"
                target="_blank"
                className={styles.home__social_icon}
              >
                <span className={"hidden__social__name"}>Western Money</span>
                <FaFacebookF/>
              </a>
              <a
                href="https://www.instagram.com/westernmoneyconsulting/"
                target="_blank"
                className={styles.home__social_icon}
              >
                <span className={"hidden__social__name"}>Western Money</span>
                <FaInstagram/>
              </a>
              <a
                href="https://twitter.com/wmc_agency"
                target="_blank"
                className={styles.home__social_icon}
              >
                <span className={"hidden__social__name"}>Western Money</span>
                <FaTwitter/>
              </a>
            </div>
          </FadeAnimation>
          <FadeAnimation top>
            <div className={styles.home__data}>
              <div className={styles.home__title__container}>
                <h1 className={styles.home__title}>
                  Guaranteed{" "}
                  <span className={styles.home__title__results}>Results</span>{" "}
                  or Payback.
                </h1>
              </div>

              <div className={styles.animated__text__container}>
                <h3 className={styles.home__subtitle}>
                  We serve{" "}
                  <span className={styles.home__animated__text} ref={el} />
                </h3>
              </div>
              <p className={styles.home__description}>
                We enhance your social media presence, perfect your website and
                search engine rank, prepare a digital strategy and leverage
                automated client acquisition systems for you to see a minimum 5x
                in your return on investment under 30 days, or your money back.
              </p>
              <div>
                <a href="#services" className={"button button__flex"}>
                  <span>Look At Services</span>
                  <FaArrowDown className={`${styles.home__button__icon}`}/>
                </a>
              </div>
            </div>
          </FadeAnimation>
        </div>
        <FadeAnimation top duration={3000} delay={200}>
          <div className={styles.home__scroll}>
            <a
              href="#calender"
              className={`${styles.home__scroll_button} button__flex`}
            >
              <FaCalendarAlt className={`${styles.home__scroll_calender}`}/>
              <span className={styles.home__scroll_name}>Set A Meeting</span>
              <FaArrowDown className={`${styles.home__scroll_arrow}`}/>
            </a>
          </div>
        </FadeAnimation>
      </div>
    </section>
  );
}
