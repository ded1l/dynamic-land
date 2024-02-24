"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import Loading from '../Loading';
import Hero from '../../../pages/template-components/hero';
import Banner from '../../../pages/template-components/banner';
import Features from '../../../pages/template-components/features';
import FeaturesBlocks from '../../../pages/template-components/features-blocks';
import ModalVideo from '../../../pages/template-components/modal-video';
import Newsletter from '../../../pages/template-components/newsletter';
import Testimonials from '../../../pages/template-components/testimonials';
function App() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    const fetchData =async ()=>{
   try {
    const res=await fetch('/api/hello?templateName=')
    const data=await res.json();
    setPageData(data);
   } catch (error) {
     console.error(`Error fetching data: ${error}`);
    } }
    fetchData();
    }, []);

  if (!pageData) {
    return <div>
      < Loading/>
    </div>;
  }

  return (
    <div className='main' style={{  padding:'92px', margin:'8px' }}>
    
            <Hero />
            <Banner />
            <FeaturesBlocks />
            <Features />
            <ModalVideo />
            <Newsletter />
            <Testimonials />

  
     
    </div>
  )
}
  export default App;
