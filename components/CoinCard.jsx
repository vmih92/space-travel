import { useEffect, useRef } from "react";
import Rellax from "rellax";

export function CoinCard({ imgSrc, imgAlt, coinDesc, rellax }) {
  
  const divRef = useRef();

  useEffect(() => {
    if (rellax) {
      new Rellax(divRef.current, rellax);
    }
  }, []);

  return (
    <div ref={divRef} className="card">
      <img src={imgSrc} alt={imgAlt} className="image" />
      <p>{coinDesc}</p>
      <style jsx>{`
        .card {
          display: flex;
          padding: 3em;
          flex-flow: column;
          justify-content: center;
          align-items: center;
        }
        .image {
          width: 40%;
          border-radius: 50%;
          box-shadow: 0 0 10px black;
        }
        p {
          margin-top: 1em;
        }
      `}</style>
    </div>
  )
}