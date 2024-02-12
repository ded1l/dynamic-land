"use client";
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
import Loading from '../src/app/Loading';

function App() {
  const router = useRouter();
  const { id } = router.query;
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch('/api/hello?templateName=fashion')
      .then(response => response.json())
      .then(data => setPageData(data));
  }, [id]);

  if (!pageData) {
    return <div>
      < Loading/>
    </div>;
  }
  const { title, header, main, footer, metadata } = pageData;

  return (
    <div className={pageData.classes}>
   <head>
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
      <meta name="description" content={metadata.description} />
      <meta property="og:image" content={metadata.image} />
      </head>
      <header className={header.classes}>
      {header.content}
      {header.image && <img src={header.image} alt="" />}
      {header.navItems.map((item, index) => (
        <a key={index} href={item.url} className={item.style}>
          {item.text}
        </a>
      ))}
      {header.button && <Button className={header.button.classes}>{header.button.text}</Button>}
    </header>
    
      <main className={main.classes}>
       
        {main.content}
        {main.image && <img src={main.image} alt="" />}
        {main.sections.map((section, index) => (
          <section key={index} className={section.classes}>
            <h2>{section.title}</h2>
            <p>{section.content}</p>
            {section.image && <img src={section.image} alt="" />}
          </section>
          
        ))}
      </main>

      <footer className={footer.classes}>
        {footer.content}
        {footer.image && <img src={footer.image} alt="" />}
      </footer>
    </div>
  )
        }
  export default App;
