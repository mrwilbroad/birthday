import { useEffect, useRef, useState } from "react";
import Confetti from "react-dom-confetti";

const Birthday = () => {
  const [show, setShow] = useState(false);
  const [word, setWord] = useState("Happy Birthday mrwilbroad!");
  const config = {
    angle: "360",
    spread: 360,
    startVelocity: "66",
    elementCount: "200",
    dragFriction: "0.01",
    duration: "10000",
    stagger: "5",
    width: "49px",
    height: "100px",
    perspective: "270px",
    colors: ["#f00", "#0f0", "#00f"],
  };

  const btnRef = useRef();
  useEffect(() => {
    if (btnRef.current) {
      btnRef.current.click();
    }
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (btnRef.current) {
        btnRef.current.click();
      }
    }, 2000);
  });

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 ">
      <section className="text-center">
        <h1 className="mb-4  text-success">{word}</h1>
        <button
          ref={btnRef}
          className="btn d-none btn-outline-primary btn-lg text-center border border-light"
          onClick={() => {
            setShow(!show);
            if (word) {
              setWord("Happy Birthday mrwilbroad");
            } else {
              setWord("Happy Birthday!");
            }
          }}
        >
          Click for birthday wishes
        </button>

        <Confetti active={show} config={config} />
      </section>
      <section className="mt-5 d-none">
        <p className="text-center">
          <a
            href="https://confess.ngl.link/mrwilbroad"
            target="_blank"
            className="border-bottom fs-5 border-4 text-decoration-none"
            rel="noopener noreferrer"
          >
            Share with me you thought
          </a>
        </p>
      </section>
    </div>
  );
};

export default Birthday;
