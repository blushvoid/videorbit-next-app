import React from 'react'
import { useMediaQuery } from '../hooks/query'
import { DesktopHeader, MobileHeader } from './header'

function ResponsiveHeader() {
  let isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <>
      {!isMobile && <DesktopHeader />}
      {isMobile && <MobileHeader />}
    </>
  )
}

export default ResponsiveHeader
