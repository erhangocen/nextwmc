'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import "swiper/css/effect-cards";
import { Autoplay, EffectCards, EffectCoverflow, Pagination } from "swiper";
import RouterButton from "../product/RouterButton";
import BasicTestimonialCard from "../product/BasicTestimonialCard";
import styles from "../styles/Testimonaial.module.css"
import TestimonialList from "../product/Objects/TestimonialList";
import FadeAnimation from "@/product/FadeAnimation";
import { Fade } from "react-awesome-reveal";

export default function Testimonial() {
  return (
    <section
      className={`${styles.testimonial} section`}
      id="testimonial"
    > <Fade triggerOnce>
      <>
      <h2 className={`${styles.testimonial__title} section__title`}>Testimonials</h2>
      <div className={`${styles.testimonial__container} ${styles.swipper} container swiper`}>
        <Swiper
          className={styles.testimonial__swipper}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          spaceBetween={30}
          loop={true}
          effect={"cards"}
          grabCursor={true}
          modules={[EffectCards, Pagination, Autoplay]}
        >
          <div className={"swiper-wrapper"}>
            {TestimonialList.map((testimonial,i)=>(
              <SwiperSlide key={i}>
            <div className={`${styles.testimonial__card} swiper-slide`}>
              <BasicTestimonialCard
                profilePhoto={testimonial.profilePhoto}
                name={testimonial.name}
                description={testimonial.description}
                job={testimonial.job}
                rate={testimonial.rate}
                descriptionStyle={{display:"-webkit-box",WebkitLineClamp:"2", WebkitBoxOrient:"vertical", overflow:"hidden", textOverflow:"ellipsis"}}
              />
            </div>
            </SwiperSlide>
            ))}            
          </div>
        </Swiper>
      </div>
      <div
        className={styles.testimonial__button__section}
        style={{ textAlign: "center" }}
      >
        <RouterButton text="View All Testimonials" href="/testimonials" />
      </div>
      </>
      </Fade>
    </section>
    
  );
}
