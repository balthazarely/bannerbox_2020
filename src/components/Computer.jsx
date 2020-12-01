import React, { useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import gsap from "gsap";

export default function Computer() {
  useEffect(() => {
    gsap.from(".browser", 2.5, { y: -60, ease: "Power2.easeOut" }, "start");
    gsap.from(".phone", 2.5, { y: 40, ease: "Power2.easeOut" }, "start");
    gsap.from(".text", 2.5, { y: 20, x: 10, ease: "Power2.easeOut" }, "start");
  }, []);

  return (
    <Wrapper>
      <ComputerWrapper>
        <img className="computer" src="computer-svg/Computer.svg" />
      </ComputerWrapper>
      <BrowserWrapper>
        <img className="browser" src="computer-svg/Browser.svg" />
      </BrowserWrapper>
      <PhoneWrapper>
        <img className="phone" src="computer-svg/Phone.svg" />
      </PhoneWrapper>
      <TextWrapper>
        <img className="text" src="computer-svg/Text.svg" />
      </TextWrapper>
    </Wrapper>
  );
}

const Wrapper = styled(motion.div)`
  position: relative;
  /* border: 4px solid red; */
  width: 500px;
  height: 500px;
  @media (max-width: 1300px) {
    width: 375px;
    height: 375px;
  }
  @media (max-width: 850px) {
    margin-top: 3rem;
    width: 300px;
    height: 300px;
    div {
      left: 0;
    }
  }
`;

const ComputerWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50px;
  /* border: 2px solid blue; */
  width: 100%;
  height: 100%;
`;
const BrowserWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50px;
  /* border: 2px solid blue; */
  width: 100%;
  height: 100%;
`;

const PhoneWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50px;
  /* border: 2px solid blue; */
  width: 100%;
  height: 100%;
`;

const TextWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 50px;
  /* border: 2px solid blue; */
  width: 100%;
  height: 100%;
`;
