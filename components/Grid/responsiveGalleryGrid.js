import React from 'react'
import { useMediaQuery } from '../../hooks/query'

import { DesktopGrid, MobileGrid } from './Grid'

function ResponsiveGalleryGrid() {
  let isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <>
      {!isMobile && <DesktopGrid />}
      {isMobile && <MobileGrid />}
    </>
  )
}

export default ResponsiveGalleryGrid
