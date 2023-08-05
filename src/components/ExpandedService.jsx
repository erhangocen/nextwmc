import React, { useEffect, useState } from "react";
import styles from "../styles/ExpandedService.module.css";
import Image from "next/image";
import { Fade } from "react-awesome-reveal";

export default function ExpandedService(props) {
  const [currenstService, setCurrenstService] = useState({});
  const [currentServiceHeight, setCurrentServiceHeight] = useState();

  useEffect(() => {
    setCurrenstService(props.data);
  }, [props]);

  useEffect(() => {
    setCurrentServiceHeight(
      document.getElementById("expnaded__service__data")?.offsetHeight
    );
  });

  return (
    <Fade triggerOnce>
      {currenstService ? (
        <div>
          <div
            data-aos="fade-top"
            data-aos-duration="500"
            className={`${styles.expnaded__service__container} rounded text-bg-dark w-100 mb-3`}
          >
            <div className={styles.expnaded__service__card}>
              <Image
                alt="westenrnmoney__service"
                src={currenstService.backgroundPhoto}
                className={styles.expnaded__service__img}
                style={{
                  height: currentServiceHeight-1 + "px",
                }}
              />
              <div
                className={styles.expnaded__service__data}
                id="expnaded__service__data"
              >
                <div className={styles.expnaded__service__content}>
                  <h2 className={styles.expnaded__service__title}>
                    {currenstService.title}
                  </h2>
                  <div className={"m-4"}>{currenstService.description}</div>
                  <div>
                    {currenstService.descriptionList}
                  </div>
                  <div className={styles.services__consulting}>
                    {currenstService.consulting}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </Fade>
  );
}
