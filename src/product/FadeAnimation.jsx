import React from 'react'
import { Fade } from 'react-awesome-reveal'

export default function FadeAnimation({children, ...props}) {
  return (
    <Fade triggerOnce duration={2000} delay={200} {...props}>
        {children}
    </Fade>
  )
}
