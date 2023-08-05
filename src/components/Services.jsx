"use client";
import React, { useEffect, useState } from "react";
import RouterButton from "../product/RouterButton";
import BasicServiceCard from "../product/BasicServiceCard";
import styles from "../styles/Services.module.css";
import ServiceList from "../product/Objects/ServiceList";
import { useRouter } from "next/router";
import { Fade } from "react-awesome-reveal";

export default function Services() {
  const router = useRouter();

  return (
    <section
      className={`${styles.services} section ${styles.services__section}`}
      id="services"
    >
      <Fade triggerOnce>
        <>
          <div className={styles.services__content}>
            <h2 className={"section__title"}>TOP SERVICES</h2>

            <div className={`${styles.services__container} container grid`}>
              {ServiceList.map((s, i) => (
                <BasicServiceCard
                  key={i}
                  imgSrc={s.graphicImage}
                  title={s.title}
                  clickAction={() => {
                    router.push({ pathname: "/services", query: { id: i } });
                  }}
                />
              ))}
            </div>
          </div>
          <div style={{ textAlign: "center", marginTop: 70 }}>
            <RouterButton text="View All Services" href="/services" />
          </div>
        </>
      </Fade>
    </section>
  );
}
