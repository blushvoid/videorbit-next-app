import React from 'react'
import Light from './RectLight'

const Lights = () => {
  return (
    <>
      <ambientLight intensity={0.5} />
      <spotLight position={[70, 70, -50]} castShadow />
      <pointLight position={[-20, -20, 10]} color='#59B2EB' intensity={3} />
      <pointLight position={[0, -5, 5]} intensity={0.5} />
      <pointLight position={[0, 0, 55]} intensity={0.5} />
      <directionalLight position={[0, -2, 0]} color='#6D4ED4' intensity={4} />
      <pointLight position={[-20, -20, 40]} color='#FF7ADC' intensity={0.5} />
      <Light />
      {/* <hemisphereLight
        color="#ffffff"
        groundColor="#b9b9b9"
        position={[-7, 25, 13]}
        intensity={0.85}
      /> */}
      {/* <ambientLight intensity={1} />
      <directionalLight position={[10, 20, 5]} intensity={0.5} />
      <directionalLight
      castShadow
      position={[0, 15, 0]}
      intensity={0.3}
      shadow-mapSize-width={1024}
      shadow-mapSize-height={1024}
      shadow-camera-far={50}
      shadow-camera-left={-10}
      shadow-camera-right={20}
      shadow-camera-top={10}
      shadow-camera-bottom={-10}
      />
      <spotLight intensity={1} position={[1000, 0, 0]} castShadow />
      
      <directionalLight
      position={[5, 5, 5]}
      intensity={1}
      color="#F783BB"
      castShadow
    /> */}
      {/*<directionalLight position={[-5, -5, 5]} intensity={1} color="purple" />  */}
    </>
  )
}

export default Lights
