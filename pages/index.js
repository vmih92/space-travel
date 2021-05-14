import { useEffect, useState, useRef } from "react";
import Head from "next/head";
import Rellax from "rellax";
import { JoinUs } from "../components/JoinUs";
import { CoinCard } from "../components/CoinCard";

const imgPrefix = process.env.NEXT_PUBLIC_BASE_PATH || '';

export default function SpaceTravel() {

  const [showHeading, setShowHeading] = useState(false);
  
  const config = [
    { class: '.space-heading', speed: 1 },
    { class: '.the-rocket', speed: 2 },
    { class: '.the-earth', speed: 1 },
    { class: '.the-moon', speed: 3 },
    { class: '.the-satellite', speed: 5 },
  ];

  useEffect(() => {
    config.forEach(item => new Rellax(item.class, { speed: item.speed }))
    setTimeout(() => {
      setShowHeading(true);
    }, 500);
  }, [])

  return (
    <div>
      <Head>
        <title>Space Travel - To The Moon</title>
        <link rel="shortcut icon" href={`${imgPrefix}/favicon.ico`} />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=decive-width"/>
      </Head>
      <main>
        <section className="space-container">
          <img src={`${imgPrefix}/earth.png`} alt="earth" className="the-earth" />
          <img src={`${imgPrefix}/moon.png`} alt="moon" className="the-moon" />
          <img src={`${imgPrefix}/satellite.png`} alt="satellite" className="the-satellite" />
          <img src={`${imgPrefix}/doge-rocket.png`} alt="rocket" className="the-rocket" />
          <h1 className="space-heading">To The Moon</h1>
          <svg className="svg-curve-top" xmlns="http://www.w3.org/2000/svg" fill="orange" viewBox="0 0 100 100" preserveAspectRatio="none" >
            <path d="M0,100 C65,93 76,10 100,100" />
          </svg>
        </section>
        <section className="space-story">
          {
            [
              {
                imgSrc: "/doge-pilot.jpg", 
                imgAlt: "doge-pilot", 
                coinDesc: "Originally formed as a joke, Dogecoin was created by IBM software engineer Billy Markus and Adobe software engineer Jackson Palmer.", 
                rellax: { speed: 2 } 
              }, {
                imgSrc: "/rainbow-cat.png", 
                imgAlt: "rainbow-cat", 
                coinDesc: "Markus had designed Dogecoin's protocol based on existing cryptocurrencies Luckycoin and Litecoin, which use scrypt technology in their proof-of-work algorithm.", 
                rellax: { speed: 2 } 
              }, {
                imgSrc: "/thecoin.png", 
                imgAlt: "doge-coin", 
                coinDesc: "On May 8, 2021, despite, or perhaps because of expectations of a surge in interest in Dogecoin resulting from Elon Musk's appearance on Saturday Night Live, Dogecoin dropped 34% from $.711 at the opening of the show to below $.470 45 minutes later. By the following morning Dogecoin hit a swing low of $0.401, a cumulative drop of 43.6% and lost value of $35 billion.", 
                rellax: { speed: 2 } 
              }
            ].map((story, i) => <CoinCard key={i} {...story} />)
          }
        </section>
        <JoinUs />
      </main>
      <style jsx>{`
        h1 {
          text-transform: uppercase;
          font-size: 4em;
          color: white;
          background: rgba(0, 0, 0, 0.6);
          padding: 0 60px;
          white-space: nowrap;
          opacity: ${showHeading ? 1 : 0};
          transition: opacity linear 1s;
        }
        .svg-curve-top {
          position: absolute;
          height: 4em;
          width: 100%;
          bottom: 0;
        }
        .space-container {
          height: 650px;
          position: relative;
          overflow: hidden;
          background-image: url('./space.png');
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .the-rocket {
          position: absolute;
          width: 10%;
          left: 35%;
          top: 65%;
        }
        .the-earth {
          position: absolute;
          top: -20%;
          right: -10%;
        }
        .the-moon {
          width: 30%;
          position: absolute;
          top: 20%;
          left: 5%;
        }
        .the-satellite {
          width: 15%;
          transform: scale(0.3) rotate(-100deg);
          position: absolute;
          right: 10%;
          bottom: 10%;
        }
        .space-story {
          background-color: orange;
          align-items: baseline;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          min-height: 550px;
        }
        .space-story p {
          margin-top: 1.5em;
          text-align: center;
        }
        @media (max-width: 1024px) {
          .space-story {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 641px) {
          h1 {
            font-size: 2em;
          }
          .the-earth {
            width: 350px;
          }
          .the-moon {
            top: 30%;
          }
          .the-rocket {
            width: 100px;
          }
          .the-satellite {
            width: 80px;
          }
        }
      `}</style>
    </div>
  )
}