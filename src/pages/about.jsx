import AboutDetails from '@/components/AboutDetails'
import BasicExpandedPage from '@/product/BasicExpandedPage'
import React from 'react'

export default function About() {
  return (
    <div>
        <BasicExpandedPage>
            <AboutDetails/>
        </BasicExpandedPage>
    </div>
  )
}
