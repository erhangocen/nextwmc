import React from 'react'
import ExpandedHeader from '../components/ExpandedHeader'
import Contact from '../components/Contact'

export default function BasicExpandedPage({children}) {
  return (
    <div>
        <ExpandedHeader/>
        {children}
        <Contact/>
    </div>
  )
}
