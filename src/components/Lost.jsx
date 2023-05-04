import React from 'react'
import styles from "../styles/Lost.module.css"
import lostMoney from "../assets/img/lostmoney.png"
import RouterButton from '../product/RouterButton'
import Image from 'next/image'

export default function Lost() {
  return (
    <div className={`${styles.lost__container} container`}>
      <div className={"row"}>
        <div className={"col-md-6 align-self-center"}>
            <Image className={styles.lost__img} src={lostMoney}/>
        </div>
        <div className={"col-md-6 align-self-center"}>
          <div className={styles.lost__main__title}>404</div>
          <div className={styles.lost__title}>You re lost.</div>
            <p>
                The page you are looking for does not exist. How you got here is a
                mystery. But you can click the button below to go back to the
                mainpage.
            </p>
            <RouterButton
              href="/"
              text="Back To Main Page"
            />
        </div>
      </div>
    </div>
  )
}
