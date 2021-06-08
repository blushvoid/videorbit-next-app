import React from 'react'

import ResponsiveGalleryGrid from '../components/Grid/responsiveGalleryGrid'
import ResponsiveHeader from '../components/responsiveHeader'
import Footer from '../components/footer'

const Portfolio = () => (
  <>
    <ResponsiveHeader style={{ zIndex: 9999, color: '#FFF' }} />
    <ResponsiveGalleryGrid />
    <Footer />
  </>
)

export default Portfolio
