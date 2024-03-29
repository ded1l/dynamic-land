

  "use client";

import {Card, CardHeader, CardBody, Image} from "@nextui-org/react";
import styles from './page.module.css'
import React, { useState, useEffect } from 'react';
import Loading from "./Loading";
import Link from "next/link";

function Home() {
  const [pageData, setPageData] = useState();

  useEffect(() => {
    fetch('/api/hello?templateName=')
      .then(response => response.json())
      .then(data => setPageData(data));
  }, []);

  if (!pageData) {
    return (
      <div className="flex justify-center items-center h-10vh m-8vh">
        <Loading/>
      </div>
    );
  }
  const { title, metadata } = pageData;

  return (
    <div className={styles.Home}>
    
    <ul className={styles.grid}>
      {pageData.map((pageData, index) => (
        <li key={index}>
        

{/*      to add to the card type pageData. what section . what object  */}

<Link href=
{`/preview`}
>

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

    </Link>




    

          </li>
      ))}
    <h1 className="text-4xl font-bold"></h1>
    </ul>
  
  </div>
  );
}

export default Home;



