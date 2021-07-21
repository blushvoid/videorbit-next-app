import React, { Component } from 'react'
import data from './data'
import { Grid, Slug, Fade } from 'mauerwerk'
import { X } from 'react-feather'
import Image from 'next/image'

const Cell = ({
  toggle,
  name,
  description,
  img,
  css,
  alt,
  gifImg,
  maximized,
  link
}) => (
  <div
    className='cell'
    style={{ backgroundImage: css, cursor: !maximized ? 'pointer' : 'auto' }}
    onClick={!maximized ? toggle : undefined}
  >
    <Fade show={maximized} delay={maximized ? 400 : 0}>
      <div className='details'>
        <Slug delay={300}>
          <div className='circle' style={{ background: `url(${gifImg})`, backgroundPosition: 'center', backgroundSize: 'auto' }} />
          <div className='close'>
            <X style={{ cursor: 'pointer' }} onClick={toggle} />
          </div>
          <h1>{name}</h1>
          <p className="gridDescription">{description}</p>
          <p className="gridDescription">Try it yourself <a href={link} target="_blank">here →</a></p>
        </Slug>
      </div>
    </Fade>
    <Fade
      show={!maximized}
      from={{ opacity: 0, transform: 'translate3d(0,140px,0)' }}
      enter={{ opacity: 1, transform: 'translate3d(0,0px,0)' }}
      leave={{ opacity: 0, transform: 'translate3d(0,-50px,0)' }}
      delay={maximized ? 0 : 400}
    >
      <div className='default'>
        <Image src={img} alt={alt} className='cellPreview' layout='fill' />
        <h1>{name}</h1>
      </div>
    </Fade>
  </div>
)

class DesktopGrid extends Component {
  render() {
    return (
      <div className='main'>
        <Grid
          className='grid'
          // Arbitrary data, should contain keys, possibly heights, etc.
          data={data}
          // Key accessor, instructs grid on how to fet individual keys from the data set
          keys={(d) => d.name}
          // Can be a fixed value or an individual data accessor
          heights={620}
          // Number of columns
          columns={4}
          // Space between elements
          margin={0}
          // Removes the possibility to scroll away from a maximized element
          lockScroll={false}
          // Delay when active elements (blown up) are minimized again
          closeDelay={50}
        >
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </div>
    )
  }
}

class MobileGrid extends Component {
  render() {
    return (
      <div className='main'>
        <Grid
          className='grid'
          data={data}
          keys={(d) => d.name}
          heights={400}
          columns={2}
          margin={0}
          lockScroll={true}
          closeDelay={100}
        >
          {(data, maximized, toggle) => (
            <Cell {...data} maximized={maximized} toggle={toggle} />
          )}
        </Grid>
      </div>
    )
  }
}
//   return (
//     <Grid
//       className='grid'
//       // Arbitrary data, should contain keys, possibly heights, etc.
//       data={data}
//       // Key accessor, instructs grid on how to fet individual keys from the data set
//       keys={(d) => d.name}
//       // Can be a fixed value or an individual data accessor
//       heights={(d) => d.height}
//       // Number of columns
//       columns={3}
//     >
//       {(data, maximized, toggle) => (
//         <div
//           className='cell'
//           style={{ backgroundImage: data.css }}
//           onClick={toggle}
//         >
//           {maximized && (
//             <div className='details'>
//               <div className='circle' style={{ background: data.css }} />
//               <h1>{data.name}</h1>
//               <p>{data.description}</p>
//             </div>
//           )}
//           {!maximized && <div className='default'>{data.name}</div>}
//         </div>
//       )}
//     </Grid>
//   )
// }

export { DesktopGrid, MobileGrid }
