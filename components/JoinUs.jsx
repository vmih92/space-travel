import { useEffect, useState } from "react";
import { isValidEmail } from "../utils/validate";

export function JoinUs() {
  
  const [email, setEmail] = useState("");
  const [disableSignup, setDisableSignup] = useState(true);

  useEffect(() => {
    if (isValidEmail(email)) {
      setDisableSignup(false);
      return;
    }
    setDisableSignup(true);
  }, [email])

  return (
    <section className="space-join-us">
      <h3>Register to join us on our journey to the moon</h3>
      <form className="space-join-us-email-wrapper">
        <input className="space-email" type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
        <a className="space-button" disabled={disableSignup} type="submit" href="#">Sign Up</a>
      </form>
      <style jsx>{`
        @import "../styles/variables.css";
        
        .space-join-us {
          display: flex;
          flex-flow: column;
          justify-content: center;
          align-items: center;
          background: url('/bg2.png') no-repeat center center/cover;
          min-height: 300px;
        }
        .space-join-us h3 {
          line-height: 3em;
        }
        .space-email {
          padding: 0.5em;
          font-size: 1em;
          width: 300px;
          vertical-align: middle;
        }
        .space-button {
          margin-left: 1em;
          padding: 10px;
          vertical-align: middle;
          width: 100px;
          outline: none;
          text-transform: uppercase;
          background-color: orange;
          cursor: pointer;
          pointer-events: ${ disableSignup ? 'none' : 'visible'};
          opacity: ${ disableSignup ? 0.5 : 1 };
        }
        .space-button:hover {
          opacity: 0.5;
          box-shadow: 0 0 10px black;
        }
        @media (max-width: 641px) {
          .space-join-us {
            padding: 0 10px;
            background-color: rgba(48,52,67,255);
          }
          .space-join-us h3 {
              font-size: 1em;
              line-height: 1.5em;
          }
          .space-join-us-email-wrapper {
            flex-flow: column;
            display: flex;
            width: 100%;
          }
          .space-join-us-email-wrapper .space-email{
            width: 100%;
            padding: 0.5em;
            font-size: 1.2em;
          }
          .space-join-us-email-wrapper .space-button{
            margin: 1em auto;
            width: 50%;
            text-align: center;
          }
        }
      `}</style>
    </section>
  )
}