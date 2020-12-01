import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion, AnimatePresence } from "framer-motion";
import IframeContainer from "./IframeContainer";
import Banner from "./Banner";
import { bannerInfo } from "./BannerInfo";
import { fade, scrollReveal } from "../animation";
import { useScroll } from "./useScroll";

export default function BannerCollection() {
  const [frameOpen, setFrameOpen] = useState(false);
  const [selectedIframe, setSelectedIframe] = useState("");
  const [element, controls] = useScroll();

  const handleBannerClick = (bannerSrc) => {
    setFrameOpen(true);
    setSelectedIframe(bannerSrc);
  };
  const handleCloseModal = (e) => {
    if (e.target.classList.contains("shadow")) {
      setFrameOpen(false);
    }
  };

  return (
    <BannerContainer
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <HeaderWrapper>
        <div className="header">
          <h2 style={{ color: "white" }}>
            Our <span>Work</span>
          </h2>
        </div>
      </HeaderWrapper>
      <BannerLayout>
        {bannerInfo.map((banner) => {
          return (
            <Banner
              key={banner.id}
              banner={banner}
              handleBannerClick={handleBannerClick}
            />
          );
        })}

        <AnimatePresence>
          {frameOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.15 }}
            >
              <BannerFrameContainer
                className="shadow"
                onClick={handleCloseModal}
              >
                <motion.div
                  initial={{ y: 30 }}
                  animate={{ y: 1 }}
                  exit={{ y: 20 }}
                  transition={{ duration: 0.15 }}
                >
                  <IframeContainer selectedIframe={selectedIframe} />
                </motion.div>
              </BannerFrameContainer>
            </motion.div>
          )}
        </AnimatePresence>
      </BannerLayout>
    </BannerContainer>
  );
}
const BannerContainer = styled(motion.div)`
  width: 100vw;
  /* margin: 50px 0; */
  /* border: 4px solid red; */
`;

const HeaderWrapper = styled(motion.div)`
  width: 100vw;
  padding: 2rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  .header {
    max-width: 1400px;
    width: 100%;
    /* margin: 10px auto; */
    @media (max-width: 850px) {
      /* padding: 10rem 3rem; */
      text-align: center;
    }
  }
`;

const BannerLayout = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 0;
  grid-column-gap: 0;
  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
  /* min-height: 80vh;
  display: grid;gap: 0;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); */
  /* grid-column-gap: 3rem;
  grid-row-gap: 5rem; */
`;

const BannerFrameContainer = styled(motion.div)`
  width: 100%;
  min-height: 100vh;
  /* overflow-y: scroll; */
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5001;
  display: flex;
  justify-content: center;
  align-items: center;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #ff7676;
  }
  &::-webkit-scrollbar-track {
    background: white;
  }
`;
