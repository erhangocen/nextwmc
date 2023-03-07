"use client"
import React, { useEffect, useState } from 'react'
import { InlineWidget } from "react-calendly";
import { Fade } from 'react-reveal';
import Zoom from 'react-reveal/Zoom';


export default function Calednly() {

    const [inMobile, setInMobile] = useState(false);

  useEffect(() => {
    (window.innerWidth > 500) ? setInMobile(false) : setInMobile(true);
  },[]);

    return (
        <section className="section pt-3">
          <Fade>
          <>
            <div className="calendly__title__container" id='calender'>
                <h2 className="calendly__title section__title mb-0">Set A Meeting</h2>
            </div>
        <InlineWidget 

            url="https://calendly.com/westernmoneyconsulting/intro-call-with-wmc?hide_gdpr_banner=1"
            
            styles={{height:inMobile?"900px":"680px"}}
            pageSettings={{
                backgroundColor: '#ffffff',
                hideEventTypeDetails: false,
                hideLandingPageDetails: false,
                primaryColor: '#506d4a',
                textColor: '#506d4a'
              }}
        />
        </>
        </Fade>
        </section>
    )
}
