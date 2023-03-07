//import CalendlyButton from '@/components/CalendlyButton'
import Footer from '@/components/Footer'
import ScrollUp from '@/product/ScrollUp'
import dynamic from 'next/dynamic'
import React from 'react'

export default function Layout({children}) {

  const CalendlyButton = dynamic(()=>import("../components/CalendlyButton"))

  return (
    <>
        <div>{children}</div>
        <Footer/>
        <ScrollUp/>
        <CalendlyButton/>
    </>
  )
}
