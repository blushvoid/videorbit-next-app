import React, { useRef, useEffect, Suspense } from 'react'
import { useInView } from 'react-intersection-observer'
import { Html, useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import * as THREE from 'three'

import { Section } from './section'

function Model({ url }) {
  const gltf = useGLTF(url, true)
  return <primitive object={gltf.scene} dispose={null} />
}

const HTMLContent = ({
  domContent,
  children,
  bgColor,
  modelPath,
  fallbackModelPath,
  position,
}) => {
  const ref = useRef()
  useFrame((state) => {
    ref.current.rotation.y = THREE.MathUtils.lerp(
      ref.current.rotation.y,
      (state.mouse.x * Math.PI) / 20,
      0.05
    )
    ref.current.rotation.x = THREE.MathUtils.lerp(
      ref.current.rotation.x,
      (state.mouse.y * Math.PI) / 20,
      0.05
    )
    ref.current.position.y += Math.sin(1000 + state.clock.elapsedTime) / 50
    ref.current.rotation.x +=
      (Math.sin(1000 + state.clock.elapsedTime) * Math.PI) / 2000
    ref.current.rotation.y +=
      (Math.cos(1000 + state.clock.elapsedTime) * Math.PI) / 2000
    ref.current.rotation.z +=
      (Math.sin(1000 + state.clock.elapsedTime) * Math.PI) / 4000

    // console.log(state.mouse);
  })
  // WORKING ROTATION
  // useFrame(() => (ref.current.rotation.y += 0.001));

  const [refItem, inView] = useInView({
    threshold: 0,
  })
  useEffect(() => {
    inView && (document.body.style.background = bgColor)
  }, [inView, bgColor])

  return (
    <Section factor={1.5} offset={1}>
      <group position={[0, position, 0]} ref={ref}>
        {/* !!! MESH POSITION FOR THE 3D MODELS position={[0.8, -10.96, 2.16]}*/}
        <mesh
          ref={ref}
          position={[0.8, -1.0, -5.0]}
          rotation={[0, 0.0, -0.05]}
          castShadow
          receiveShadow
        >
          <fog attach='fog' args={['lightpink', 60, 50]} />
          <Suspense fallback={<Model url={fallbackModelPath} />}>
            <Model url={modelPath} />
          </Suspense>
        </mesh>
        <Html fullscreen portal={domContent}>
          <div ref={refItem} className='container'>
            <h1 className='title'>{children}</h1>
          </div>
        </Html>
      </group>
    </Section>
  )
}

export default HTMLContent
