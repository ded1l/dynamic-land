'use client'

import { useState, useEffect } from 'react'

export default function Banner() {
  const [bannerOpen, setBannerOpen] = useState<boolean>(true)
  const [userInput, setUserInput] = useState<string>('')
  const [jsonData, setJsonData] = useState<any>(null)

  useEffect(() => {
    fetch('/api/hello?templateName=fashion'+userInput)
      .then(response => response.json())
      .then(data => setJsonData(data.default))
      .catch(error => console.error(`Error fetching data: ${error}`));
  
  }, [userInput]);

  return (
    <>
      <input type="text" value={userInput} onChange={e => setUserInput(e.target.value)} />
      {bannerOpen && jsonData && (
        <div className={jsonData.containerClass}>
          <div className={jsonData.contentClass}>
            <div className='text-slate-500 inline-flex'>
              {jsonData.links.map((link, index) => (
                <a key={index} className={link.class} href={link.href} target={link.target} rel={link.rel}>
                  {link.text}
                </a>
              ))}
            </div>
            <button className={jsonData.buttonClass} onClick={() => setBannerOpen(false)}>
              <span className="sr-only">Close</span>
              <svg className={jsonData.svgClass} viewBox={jsonData.svgViewBox}>
                <path d={jsonData.svgPath} />
              </svg>
            </button>
          </div>
        </div>
      )}
    </>
  )
}