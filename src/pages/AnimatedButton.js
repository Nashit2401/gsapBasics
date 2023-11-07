import React, { useRef, useEffect } from "react";
import { Box, Button } from "@mui/material";
import { Power3, gsap } from "gsap";

const AnimatedButton = () => {
  const buttonRef = useRef(null);
  const comp = useRef();

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.to(buttonRef.current, {
        opacity: 1,
        duration: 5,
        x: 100,
        delay: 0.2,
        rotateZ: 720,

        // css: { visibility: "visible" },
        ease: Power3.easeOut,
      });
    }, comp);
    return () => ctx.revert();
  }, []);

  return (
    <Box>
      <Button ref={buttonRef} variant="contained">
        Animated Button
      </Button>
    </Box>
  );
};

export default AnimatedButton;
