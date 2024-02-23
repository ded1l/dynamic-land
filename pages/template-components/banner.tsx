'use client'

import { useState, useEffect } from 'react'

export default function Banner() {
  // const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const [jsonData, setJsonData] = useState<any>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello?templateName=fashion');
        const data = await response.json();
        setJsonData(data.Banner);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };
  
    fetchData();
  }, []);


  if (!jsonData) {
    return null; 
  }
  return (
    <>
      <div className={jsonData.containerClass}>
      <div className={jsonData.contentClass}>
        <h1 className={jsonData.titleClass}></h1>
        <div className='text-slate-500 inline-flex'>
          {jsonData.links.map((link:any, index:number ) => (
            <a key={index} className={link.class} href={link.href} target={link.target} rel={link.rel}>
              {link.text}
            </a>
          ))}
        </div>
        <button className={jsonData.buttonClass}>
          <span className="sr-only">Close</span>
          <svg className={jsonData.svgClass} viewBox={jsonData.svgViewBox}>
            <path d={jsonData.svgPath} />
          </svg>
        </button>
      </div>
    </div>
    </>
  );
}