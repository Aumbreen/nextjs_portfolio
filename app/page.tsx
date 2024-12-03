"use client";

import AOS from "aos";
import "aos/dist/aos.css"
import { useEffect } from 'react';


import Hero from './components/Hero'
import About from "./About/page";
import Skills from './components/Skills'

import Projects from './components/Projects'
import Contact from "./Contact/page";
import Card from "./components/Card";



const Home = () => {
useEffect(() =>{
  AOS.init({

    easing:"ease-out-back",
    duration:1200,
    delay:100,
    mirror:true,
    anchorPlacement:"bottom-bottom",
    offset:160,

  });
  AOS.refresh()
},[]);



  return (
    <main>
      <Hero />
      <About />
      <Skills />
      <Contact />
      {/* <Card /> */}
      <Projects />
    </main>
  )
}

export default Home