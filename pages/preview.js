"use client";
import React, { useEffect, useState } from 'react';
import { Button } from '@nextui-org/react';
function App() {
  const [pageData, setPageData] = useState(null);

  useEffect(() => {
    fetch('/api/hello?templateName=login')
      .then(response => response.json())
      .then(data => setPageData(data));
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }

  const { title, header, main, footer, metadata } = pageData;

  return (
    <div className="App">
      <head>
        <title>{metadata.title}</title>
        <meta name="keywords" content={metadata.keywords} />
        <meta name="description" content={metadata.description} />
      </head>
      <header className={header.classes}>
        {header.content}
        {header.image && <img src={header.image} alt="" />}
        {header.links.map((link, index) => (
          <a key={index} href={link.url} className="nextui-link">
            {link.text}
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