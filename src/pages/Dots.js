import React, { useEffect, useRef, useState } from "react";
import gsap, { Power3 } from "gsap";

const Dots = () => {
  let circle = useRef(null);
  let circleRed = useRef(null);
  let circleBlue = useRef(null);
  const comp = useRef();
  const [toggle, setToggle] = useState(false);

  const handleExpand = () => {
    gsap.to(circleRed, { width: 200, height: 200, ease: Power3.easeOut });
    setToggle(true);
  };
  const handleShrink = () => {
    gsap.to(circleRed, { width: 75, height: 75, ease: Power3.easeOut });
    setToggle(false);
  };

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(circle, {
        opacity: 0,
        x: 40,
        duration: 0.8,
      });
      gsap.from(circleRed, {
        opacity: 0,
        x: 40,
        duration: 0.8,
        delay: 0.2,
        rotateX: 720,
      });
      gsap.from(circleBlue, { opacity: 0, x: 40, duration: 0.8, delay: 0.5 });
    }, comp);
    // gsap.to(app, 0, { css: { visibility: "visible" } });
    // gsap.
    return () => ctx.revert();
  }, []);
  return (
    <div className="circle-container">
      <div
        ref={(el) => {
          circle = el;
        }}
        className="circle"
      ></div>
      <div
        ref={(el) => {
          circleRed = el;
        }}
        className="circle-red"
        onClick={toggle ? handleShrink : handleExpand}
      >
        HI
      </div>
      <div
        ref={(el) => {
          circleBlue = el;
        }}
        className="circle-blue"
      ></div>
    </div>
  );
};

export default Dots;
