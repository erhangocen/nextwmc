import React from 'react'
import LazyLoad from 'react-lazy-load';
import styles from "../styles/ServiceDetails.module.css"
import Image from 'next/image';
import { Fade, Zoom } from 'react-reveal';
import { FaExpandArrowsAlt } from 'react-icons/fa';


export default function BasicServiceDetailCard(props) {
  const expandedService = () => {
    window.scrollTo(0, 0);
    props.click();
  };

  return (
    <Fade>
      <div style={{ position: "relative", width:"100%"}}>
        <div style={{ position: "relative" }}>
          <LazyLoad>
            <Image
              src={props.backgroundPhoto}
              alt="westernmoney__new__service__details"
              className={styles.new__service__details__img}
            />
          </LazyLoad>
          <div className={styles.new__service__details__visible__title}>
            <span className={styles.visible__titile__span}>{props.name}</span>
          </div>
        </div>

        <div className={styles.new__service__details__content}>
          <h3 className={styles.new__service__details__name}>{props.name}</h3>
          <p className={styles.new__service__details__description}>
            {props.description}
          </p>
          <div
            onClick={expandedService}
            className={`${styles.new__about__more__button} button button__flex`}
          >
            <FaExpandArrowsAlt/>
          </div>
        </div>
      </div>
    </Fade>
  );
}
