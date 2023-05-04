import AboutDetails from '@/components/AboutDetails'
import BasicExpandedPage from '@/product/BasicExpandedPage'
import Head from 'next/head'
import React from 'react'

export default function About() {
  return (
    <div>
        <Head>
          <title>About Us - Western Money Consulting - Mehmet Toptaş | Erhan Göcen | Deniz Mengüş</title>
          <meta
          name="description"
          content="Western Money Consulting founded by 'Mehmet Toptaş', 'Erhan Göcen' and 'Deniz Mengüş' in 2023. "
        />
        </Head>
        <BasicExpandedPage>
            <AboutDetails/>
        </BasicExpandedPage>
    </div>
  )
}
