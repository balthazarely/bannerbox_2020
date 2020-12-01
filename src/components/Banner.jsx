import React from "react";
import styled from "styled-components";
import { motion, AnimatePresence, MotionConfig } from "framer-motion";

export default function Banner({ handleBannerClick, banner }) {
  return (
    <BannerCardWrapper>
      <BannerCard>
        <img src={banner.img} />
        <BtnWrapper>
          <Button onClick={() => handleBannerClick(banner.banners[0])}>
            300x250
          </Button>
          {banner.banners[1] && (
            <Button onClick={() => handleBannerClick(banner.banners[1])}>
              300x600
            </Button>
          )}
          {banner.banners[2] && (
            <Button onClick={() => handleBannerClick(banner.banners[2])}>
              320x50
            </Button>
          )}
        </BtnWrapper>
        <ImageOverlay></ImageOverlay>
      </BannerCard>
    </BannerCardWrapper>
  );
}
const BannerCardWrapper = styled(motion.div)`
  box-shadow: 0px 5px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  /* border-radius: 1rem; */
  cursor: pointer;
  overflow: hidden;
  position: relative;
`;

const ImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0.5;
  background: black;
  mix-blend-mode: multiply;
  transition: 0.5s;
`;

const BtnWrapper = styled(motion.div)`
  position: absolute;
  top: 10px;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  opacity: 0;
  z-index: 500;
  transition: 0.35s;
  transition-timing-function: ease;
`;

const BannerCard = styled(motion.div)`
  width: 300px;
  height: 250px;
  border: 2px solid red;
  img {
    transition: 1s;
    transition-timing-function: ease;
    position: absolute;
    top: 0;
    left: 0;
    width: 100% !important;
    min-height: 100% !important;
    object-fit: cover;
  }
  &:hover {
    img {
      transform: scale(1.05);
    }
    ${ImageOverlay} {
      opacity: 0;
    }
    ${BtnWrapper} {
      opacity: 1;
      top: 0px;
    }
  }
`;

const Button = styled(motion.div)`
  font-weight: bold;
  font-size: 1.1.rem;
  cursor: pointer;
  padding: 0.75rem 2rem;
  margin: 3px;
  border: 2px solid #23d997;
  background: #1b1b1b;
  color: white;
  transition: all 0.1s ease;
  transition-timing-function: ease;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;
