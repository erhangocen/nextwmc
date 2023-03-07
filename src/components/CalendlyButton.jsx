import {React, useEffect, useState} from 'react'
import { PopupWidget } from 'react-calendly'

export default function CalendlyButton() {

  const [root, setRoot] = useState();

  useEffect(() => {
    setRoot(document.getElementById("root"))
  });
  
  return ( 
    <PopupWidget
      url="https://calendly.com/westernmoneyconsulting/intro-call-with-wmc?hide_gdpr_banner=1"
      rootElement={root}
      text="Book A Call"
      textColor="#ffffff"
      color="hsla(154,100%, 25%)"
      pageSettings={{
          backgroundColor: '#ffffff',
          hideEventTypeDetails: false,
          hideLandingPageDetails: false,
          primaryColor: '#506d4a',
          textColor: '#506d4a'
      }}
    />       
  )
}


