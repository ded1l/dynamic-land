

  "use client";

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';

function Home() {
  const [templates, setTemplates] = useState(null);
  const [pageData, setPageData] = useState();

  useEffect(() => {
    fetch('/api/hello?templateName=')
      .then(response => response.json())
      .then(data => setPageData(data));
  }, []);

  if (!pageData) {
    return <div>Loading...</div>;
  }
  const { title, metadata } = pageData;

  return (
    <div className={styles.Home}>
    <ul className={styles.grid}>
      {pageData.map((pageData, index) => (
        <li key={index}>
          {/* <div className="Page">
      <h1>{title}</h1>
      <img src={pageData.metadata.image} alt={title} />
      <h2>{pageData.metadata.title}</h2>
    </div> */}




    <Card className="py-4">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p>
        <small className="text-default-500">12 Tracks</small> */}
        <h4 className="font-bold text-large">{pageData.metadata.title} </h4>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
         src={pageData.metadata.image} alt={title}
        />
      </CardBody>
    </Card>






          </li>
        
      ))}
    </ul>
  </div>
  );
}

export default Home;



