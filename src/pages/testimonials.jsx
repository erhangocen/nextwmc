import TestimonialDetails from '@/components/TestimonialDetails'
import BasicExpandedPage from '@/product/BasicExpandedPage'
import TestimonialList from '@/product/Objects/TestimonialList'
import Head from 'next/head'
import React from 'react'

export default function Testimonials() {

    

  return (
    <>
      <Head>
        <title>Testimonials - Western Money Consulting</title>
        <meta
          name="description"
          content="We work with many professional and amator business owners. Most of them satisfied with our service. So they suggested us. Bob Dearsen, Nico Perez, Arianna Kelly, Milo Houston, Li Guowei, Ethan Phillips, Charlotte Krugson some of these"
        />
      </Head>
      <BasicExpandedPage>
        <TestimonialDetails/>
      </BasicExpandedPage>
    </>
  )
}
