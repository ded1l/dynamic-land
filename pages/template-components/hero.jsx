import { useState, useEffect } from 'react'
import VideoThumb from '../../public/hero-image.png'
import ModalVideo from './modal-video'

export default function Hero() {
  const [heroData, setHeroData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/hello?templateName=fashion');
        const data = await response.json();
        setHeroData(data.Hero);
      } catch (error) {
        console.error(`Error fetching data: ${error}`);
      }
    };

    fetchData();
  }, []);

  if (!heroData) {
    return null; 
  }

  return (
    <section className={heroData.sectionClass}>
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none -z-1" aria-hidden="true">
        <svg width={heroData.svg.width} height={heroData.svg.height} viewBox={heroData.svg.viewBox} xmlns={heroData.svg.xmlns}>
          <defs>
            <linearGradient x1={heroData.svg.defs.linearGradient.x1} y1={heroData.svg.defs.linearGradient.y1} x2={heroData.svg.defs.linearGradient.x2} y2={heroData.svg.defs.linearGradient.y2} id={heroData.svg.defs.linearGradient.id}>
              {heroData.svg.defs.linearGradient.stops.map((stop, index) => (
                <stop key={index} stopColor={stop.stopColor} offset={stop.offset} />
              ))}
            </linearGradient>
          </defs>
          <g fill={heroData.svg.g.fill} fillRule={heroData.svg.g.fillRule}>
            {heroData.svg.g.circles.map((circle, index) => (
              <circle key={index} cx={circle.cx} cy={circle.cy} r={circle.r} />
            ))}
          </g>
        </svg>
      </div>
      <div className={heroData.divClass}>
        <div className={heroData.contentDivClass}>
          <div className={heroData.headerDivClass}>
            <h1 className={heroData.h1Class}>{heroData.h1Text}</h1>
            <div className="max-w-3xl mx-auto">
              <p className={heroData.pClass}>{heroData.pText}</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center">
                {heroData.buttons.map((button, index) => (
                  <div key={index}>
                    <a className={button.class} href={button.href}>{button.text}</a>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <ModalVideo
            thumb={VideoThumb}
            thumbWidth={heroData.ModalVideo.thumbWidth}
            thumbHeight={heroData.ModalVideo.thumbHeight}
            thumbAlt={heroData.ModalVideo.thumbAlt}
            video={heroData.ModalVideo.video}
            videoWidth={heroData.ModalVideo.videoWidth}
            videoHeight={heroData.ModalVideo.videoHeight} />
        </div>
      </div>
    </section>
  )
}