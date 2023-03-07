import { React, useEffect, useState } from "react";
import "../styles/globals.css";
import Head from "next/head";
import { ToastContainer } from "react-toastify";
import LoadingPage from "@/product/LoadingPage";
import { Router } from "next/router";
import dynamic from "next/dynamic";
import ScrollToTop from "@/product/ScrollToTop";
import { Cormorant_Garamond } from 'next/font/google'


const ormorant_garamond = Cormorant_Garamond({subsets:["cyrillic"],weight:["400","500","600","700"], display:"swap"})

export default function App({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);

  const Layout = dynamic(()=> import("./layout"),{loading: () => <LoadingPage/>})

  useEffect(() => {
    document.addEventListener("DOMContentLoaded", setIsLoading(false))
  }, []);

  Router.events.on("routeChangeStart", (url)=>{
    setIsLoading(true)
  })

  Router.events.on("routeChangeComplete", (url)=>{
    setIsLoading(false)
  })

  return (
    <>
      <div id="root" className={ormorant_garamond.className}>
        {isLoading?
        <LoadingPage loading={isLoading}/>:
        <>
        <ToastContainer />
        <ScrollToTop/>
        <Layout>
          <Component {...pageProps} />
        </Layout>
        </>}
      </div>
    </>
  );
}


