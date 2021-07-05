import React from 'react'
import { useMediaQuery } from '../../hooks/query'

import { DesktopGrid, MobileGrid } from './Grid'

function ResponsiveGalleryGrid() {
  let isMobile = useMediaQuery('(max-width: 800px)')

  return (
    <>
    {/* <div className="portfolioHeader">
      <div></div>
      <p></p>
      <p>Here you’ll find out what we’ve been up to.</p>
    </div> */}
      {!isMobile && <DesktopGrid />}
      {isMobile && <MobileGrid />}
    </>
  )
}

export default ResponsiveGalleryGrid
