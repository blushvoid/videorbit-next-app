// import useStore from '@/helpers/store'
// import dynamic from 'next/dynamic'

import React, { useRef, useEffect, useState, Suspense } from "react";
import Head from "next/head";

//R3F
import { Canvas } from "@react-three/fiber";

//components
import ResponsiveHeader from "../components/responsiveHeader";

import Footer from "../components/footer";
import Loader from "../components/Loader";

//scene
import Lights from "../components/Lights";
import HTMLContent from "../components/HTMLContent";

//state
import scrollState from "../components/state";

//sections
import HeroSection from "../sections/hero";
import ProcessSection from "../sections/process";
import LandingSection from "../sections/landing";
import DevelopmentSection from "../sections/development";

// lazyload
// import LazyLoad from '../components/lazyLoad'

const Page = ({ title }) => {
  // useStore.setState({ title })
  const [events, setEvents] = useState();

  const domContent = useRef();
  const scrollArea = useRef();

  const onScroll = (e) => (scrollState.top.current = e.target.scrollTop);
  useEffect(() => void onScroll({ target: scrollArea.current }), []);

  return (
    <>
      <Head>
        <title>Videorbit - Boutique Creative AR Studio in Amsterdam</title>
        <meta
          name="Videorbit - Boutique Creative AR Studio in Amsterdam<"
          content="AR studio Creative Interactive Design Social AR"
        />
        <meta
          property="viewport"
          content="initial-scale=1.0, width=device-width"
          key="title"
        />
      </Head>
      <ResponsiveHeader />
      <Canvas colorManagement camera={{ position: [0, 0, 125], fov: 70 }}>
        <Lights />
        <Suspense fallback={null}>
          <HTMLContent
            fallbackModelPath="/website_avatar_vers_fallback.gltf"
            domContent={domContent}
            bgColor="#f1d8f5 url('background.png') no-repeat"
            modelPath="/website_avatar_vers_v2Draco.gltf"
            position={250}
          >
            <HeroSection />
          </HTMLContent>
          <HTMLContent
            fallbackModelPath="/website_avatar_fruits_fallback.gltf"
            domContent={domContent}
            bgColor="#FECEE9 url('background4.png') no-repeat"
            modelPath="/website_avatar_fruits_v9.gltf"
            position={0}
          >
            <ProcessSection />
          </HTMLContent>
          <HTMLContent
            fallbackModelPath="/website_avatar_soph_fallback.gltf"
            domContent={domContent}
            bgColor="#f1d8f5 url('background5.png') no-repeat"
            modelPath="/website_avatar_soph_v15.gltf"
            position={-250}
          >
            <LandingSection />
          </HTMLContent>
          <HTMLContent
            fallbackModelPath="/website_avatar_lanc_fallback.gltf"
            domContent={domContent}
            bgColor="#f2f3fc url('background3.png') no-repeat"
            modelPath="/website_avatar_lanc_v16Draco.gltf"
            position={-500}
          >
            <DevelopmentSection />
          </HTMLContent>
        </Suspense>
      </Canvas>
      <Loader />
      <div
        className="scrollArea"
        ref={scrollArea}
        onScroll={onScroll}
        {...events}
      >
        <div style={{ position: "sticky", top: 0 }} ref={domContent} />
        <div style={{ height: `${scrollState.pages * 100}vh` }} />
      </div>
      <Footer />
    </>
  );
};

export default Page;

export async function getStaticProps() {
  return {
    props: {
      title: "Index",
    },
  };
}
