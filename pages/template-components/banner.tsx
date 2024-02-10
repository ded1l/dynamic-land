'use client'

import { useState, useEffect } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const [jsonData, setJsonData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/hello?templateName=fashion')
      .then(response => response.json())
      .then(data => setJsonData(data.default))
      .catch(error => console.error(`Error fetching data: ${error}`));
  }, []);

  return (
    <>
      {bannerOpen && jsonData && (
        <div className={jsonData.banner.containerClass}>
          <h1 className={jsonData.banner.titleClass}></h1>
          <div className={jsonData.banner.contentClass}>
            <div className='text-slate-500 inline-flex'>
              {jsonData.banner.links.map((link, index) => (
                <a key={index} className={link.class} href={link.href} target={link.target} rel={link.rel}>
                  {link.text}
                </a>
              ))}
            </div>
            <button className={jsonData.banner.buttonClass} onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
            </button>
          </div>
        </div>
      )}
    </>
  );
}