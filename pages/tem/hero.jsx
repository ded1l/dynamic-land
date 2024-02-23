import React from 'react';

export default function Hero({ data }) {
  return (
    <section style={data.section.style}>
    <div style={data.section.div.style}>
      <div style={data.section.div.div1.style}>
        <h1 style={data.section.div.div1.h1.style}>
          {data.section.div.div1.h1.text}
        </h1>
        <p style={data.section.div.div1.p.style}>
          {data.section.div.div1.p.text}
        </p>
        <div style={data.section.div.div1.div.style}>
          <button style={data.section.div.div1.div.button1.style}>
            {data.section.div.div1.div.button1.text}
          </button>
          <button style={data.section.div.div1.div.button2.style}>
            {data.section.div.div1.div.button2.text}
          </button>
        </div>
      </div>
      <div style={data.section.div.div2.style}>
        <img style={data.section.div.div2.img.style} alt={data.section.div.div2.img.alt} src={data.section.div.div2.img.src} />
      </div>
    </div>
  </section>
  );
}

export async function getServerSideProps() {
  const res = await fetch('http://localhost:3000/api/hello?templateName=fashion');
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}