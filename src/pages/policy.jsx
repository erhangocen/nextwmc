import Policies from '@/components/Policies'
import BasicExpandedPage from '@/product/BasicExpandedPage'
import Head from 'next/head'
import React from 'react'

export default function Policy() {
  return (
    <>
      <BasicExpandedPage>
          <Policies/>
      </BasicExpandedPage>
    </>
  )
}
