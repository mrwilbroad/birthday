import { useState } from "react";
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

  return (
    <div className="container-fluid d-flex flex-column justify-content-center align-items-center vh-100 ">
      <section className="text-center">
        <h1 className="mb-4  text-success">{word}</h1>
        <button
          className="btn btn-outline-primary btn-lg text-center border border-light"
          onClick={() => {
            setShow(!show);
            if (word) {
              setWord("Thanks alot, God bless you for this wishes");
            } else {
              setWord("Happy Birthday!");
            }
          }}
        >
          Click for birthday wishes
        </button>

        <Confetti active={show} config={config} />
      </section>
      <section className="mt-5">
        <p className="text-light">
          <i>Click as mush as you can</i>
        </p>
        <p>
          <a href="https://confess.ngl.link/mrwilbroad" target="_blank" 
          className="border-bottom  border-4 text-decoration-none"
          rel="noopener noreferrer">
            Share with me you thought
          </a>
        </p>
      </section>
    </div>
  );
};

export default Birthday;
