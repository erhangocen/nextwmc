import React, { useEffect, useState } from "react";
import ExpandedService from "./ExpandedService";
import ServiceList from "../product/Objects/ServiceList";
import BasicServiceDetailCard from "../product/BasicServiceDetailCard";
import styles from "../styles/ServiceDetails.module.css"
import { useRouter } from "next/router";

export default function ServicesDetails() {
  
  const state = useRouter();
  const [currentService, setCurrentService] = useState(state?.query?.id?ServiceList[state.query?.id]:null);

  return (
    <section className={`${styles.service__details} section mt-0`} data-aos="fade-top">
      <div>
        {
          currentService?<ExpandedService data={currentService} />:null
        }
      <div>
        <h2 className={`section__title mb-5 mt-4`}>ALL SERVICES</h2>
      </div>

      <div className={styles.service__details_details_seciton}>
        <div className={styles.service__details__details}>
          {
            ServiceList.map((s,i)=>(
              <div key={i} className={`${styles.service__details__card } ${styles.service__details__details__card}`}>
                <BasicServiceDetailCard
                  backgroundPhoto={s.backgroundPhoto}
                  name={s.title}
                  description={s.description}
                  click={() => {
                    setCurrentService(s);
                  }}
                />
              </div>
            ))
          }
        </div>
      </div>
      </div>
    </section>
  );
}
