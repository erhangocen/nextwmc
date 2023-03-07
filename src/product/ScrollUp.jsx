"useStrict"

import {React, useEffect} from 'react'
import styles from "../styles/ScrollUp.module.css"
import { FaArrowCircleUp, FaArrowUp, FaChevronUp } from 'react-icons/fa';

export default function ScrollUp() {

  function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    if(this.scrollY >= 560) scrollUp.classList.add(styles.show_scroll); else                          scrollUp?.classList.remove(styles.show_scroll)
}
useEffect(() => {
  window.addEventListener('scroll', scrollUp)
});


  return (
      <a href="#" className={styles.scrollup} id="scroll-up">
        <FaChevronUp className={`${styles.scrollup__icon}`}/>
      </a>
  )
}
