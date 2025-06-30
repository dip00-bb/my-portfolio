import React, { useEffect } from 'react';
import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import AboutMe from './Component/AboutMe';
import Skills from './Component/Skills';
import Project from './Component/Project';
import ContactMe from './Component/ContactMe';
import AOS from 'aos';
import 'aos/dist/aos.css';





const App = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className='bg-black jakarta-font'>

      <header className='top-0 sticky z-50'>
        <Navbar />
      </header>
      <Banner />

      <div className='max-w-11/12 mx-auto flex flex-col gap-20 mt-[5rem]'>
        <AboutMe />
        <Skills />
        <Project />
        <ContactMe />
      </div>
    </div>
  );
};

export default App;