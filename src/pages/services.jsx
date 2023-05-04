import ExpandedHeader from '@/components/ExpandedHeader'
import ServicesDetails from '@/components/ServicesDetails'
import BasicExpandedPage from '@/product/BasicExpandedPage'
import Head from 'next/head'
import React from 'react'

export default function Services() {
  return (
    <>
      <Head>
            <title>Our Services - Western Money Consulting</title>
            <meta
          name="description"
          content="We serve about Social Media Marketting Services (SMM) , SEO and Analytics Services , Digital Strategy And Guerilla Marketting , Email Marketting Services for your business"
        />
      </Head>
      <BasicExpandedPage>
        <ServicesDetails/>
      </BasicExpandedPage>
    </>
  )
}
    