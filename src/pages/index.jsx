import LendingHeader from '@/components/LendingHeader'
import Main from '@/components/Main'
import dynamic from 'next/dynamic'
import React from 'react'

export default function page() {

  const LendingHeader = dynamic(()=> import("../components/LendingHeader"))

  return (
    <div>
        <LendingHeader/>
        <Main/>
    </div>
  )
}
