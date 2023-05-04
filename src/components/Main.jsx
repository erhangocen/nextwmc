import React from "react";
import About from './About'
import Services from './Services'
import Contact from './Contact'
import styles from "../styles/Main.module.css"
import Zoom from "react-reveal/Zoom";
import dynamic from "next/dynamic";
import LoadingPage from "@/product/LoadingPage";
import Home from "./Home";
import Testimonial from "./Testimonial";

export default function Main() {

  /* const Home = dynamic(()=> import("./Home"),{loading: () => <LoadingPage/>})
  const Testimonial = dynamic(()=> import("./Testimonial"),{loading: () => <LoadingPage/>}) */

  const Calednly = dynamic(()=> import("./Calednly"))

  return (
    <div>
        <main className={styles.main}>
          <Home/>
          <About/>
          <Calednly/>
          <Services/>
          <Testimonial/>
          <Contact/>
        </main>
    </div>
  )
}
