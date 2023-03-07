import React from "react";
import BasicTestimonialCard from "../product/BasicTestimonialCard";
import styles from "../styles/Testimonaial.module.css"
import TestimonialList from "../product/Objects/TestimonialList";
import FadeAnimation from "@/product/FadeAnimation";

export default function TestimonialDetails() {
  return (
    <section className={`${styles.testimonial} section`} data-aos="fade-top">
      <div>
        <h2 className={"section__title"}>Testimonials</h2>
      </div>
      <div className={styles.testimonial_details_seciton}>
        <FadeAnimation top casecade>
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
        </FadeAnimation>
      </div>
    </section>
  );
}
