'use client';
import React from "react";
import ReactStars from "react-rating-stars-component";
import styles from "../styles/Testimonaial.module.css"
import Image from "next/image";
import { LazyLoadImage } from 'react-lazy-load-image-component';

export default function BasicTestimonialCard(props) {
  const ratingChanged = (newRating) => {
    console.log(newRating);
  };

  return (
    <>
      <Image
        quality={75}
        loading="lazy"
        sizes="(max-width: 768px) 100vw,
        (max-width: 1200px) 50vw,
        33vw"
        src={props.profilePhoto}
        alt="westernmoney__testimonial"
        className={styles.testimonial__img}
      />
      <div style={{ display: "flex", flexDirection: "row", gap: ".7rem" }}>
        <h3 className={styles.testimonial__name}>{props.name}</h3>
        <div style={{ paddingTop: ".1rem" }}>
          <ReactStars
            count={5}
            size={17}
            value={props.rate}
            edit={false}
            isHalf={true}
            activeColor="#ffd700"
          />
        </div>
      </div>

      {props.job ? (
        <div className={`${styles.testimonial__description} ${styles.testimonial__job} mb-3`  }>
          {props.job}
        </div>
      ) : null}

      <p className={styles.testimonial__description} style={props.descriptionStyle}>
        {props.description}
      </p>
    </>
  );
}
