import React from 'react'
import logo from "../assets/img/wmcLogooo.png"
import styles from "../styles/LoadingPage.module.css"
import Image from 'next/image'
import { ClipLoader } from "react-spinners";

export default function LoadingPage(props) {
  return (  
    <div className={styles.loadingLogoContainer}>
        <ClipLoader
        color={"white"}
        loading={props.loading}
        size={150}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </div>
  )
}
