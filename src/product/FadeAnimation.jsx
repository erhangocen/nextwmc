import React from 'react'
import { Fade } from 'react-reveal'

export default function FadeAnimation({children, ...props}) {
  return (
    <Fade duration={2000} delay={200} {...props}>
        {children}
    </Fade>
  )
}
