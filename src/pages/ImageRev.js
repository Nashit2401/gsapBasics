import React, { useEffect, useRef } from "react";
import { Box, Typography, duration } from "@mui/material";
import test1 from "../images/test1.jpg";
import gsap, { Power2 } from "gsap";
import "../App.scss";
import CSSRulePlugin from "gsap/CSSRulePlugin";

const ImageRev = () => {
  let container = useRef(null);
  let image = useRef(null);
  const tl = gsap.timeline();
  let imageReveal = CSSRulePlugin.getRule(".img-container:after");

  useEffect(() => {
    tl.to(container, { duration: 1, css: { visibility: "visible" } })
      .to(imageReveal, { duration: 1.4, width: "0%", ease: Power2.easeInOut })
      .to(image, {
        duration: 1.4,
        scale: 0.7,
        ease: Power2.easeOut,
        delay: -1.6,
      });
  }, []);

  return (
    <>
      <Box className="main">
        <Box
          ref={(el) => {
            container = el;
          }}
          className="container"
        >
          <Box className="img-container">
            <img
              ref={(el) => {
                image = el;
              }}
              src={test1}
              alt="testimage"
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ImageRev;
