import React from "react";
import BasicTestimonialCard from "../product/BasicTestimonialCard";
import styles from "../styles/Testimonaial.module.css"
import TestimonialList from "../product/Objects/TestimonialList";
import Reveal from "react-awesome-reveal";
import { keyframes } from "@emotion/react";

export default function TestimonialDetails() {

  const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translate3d(0px, -100px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;

  return (
    <section className={`${styles.testimonial} section`} data-aos="fade-top">
      <div>
        <h2 className={"section__title"}>Testimonials</h2>
      </div>
      <Reveal keyframes={customAnimation}>
      <div className={styles.testimonial_details_seciton}>
        
        <div className={styles.testimonial__details}>
          {TestimonialList.map((testimonial, i) => (
            <div key={i} className={`${styles.testimonial__card } ${styles.testimonial__details__card}`}>
              <BasicTestimonialCard
                profilePhoto={testimonial.profilePhoto}
                name={testimonial.name}
                description={testimonial.description}
                job={testimonial.job}
                rate={testimonial.rate}
              />
            </div>
          ))}
        </div>
        
      </div>
      </Reveal>
    </section>
  );
}
