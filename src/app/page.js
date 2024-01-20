

  "use client";

import React, { useState, useEffect } from 'react';

function Home() {
  const [templates, setTemplates] = useState(null);

  useEffect(() => {
    fetch('/api/hello?templateName=')
      .then(response => response.json())
      .then(data => setTemplates(data));
  }, []);

  if (!templates) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Home">
    <ul>
      {templates.map((template, index) => (
        <li key={index}>{template}</li>
      ))}
    </ul>
  </div>
  );
}

export default Home;



