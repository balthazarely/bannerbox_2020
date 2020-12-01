import React from "react";
import styled from "styled-components";
import { About } from "../styles";
import Toggle from "./Toggle";
import { AnimateSharedLayout } from "framer-motion";
import { fade, scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { motion } from "framer-motion";
import { Container, ContentWrapper } from "../layoutStyles";

const FaqSection = () => {
  const [element, controls] = useScroll();
  return (
    <Container
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <ContentWrapper>
        <FaqPage>
          <h2>
            <span>FAQ</span>
          </h2>
          <AnimateSharedLayout>
            <Toggle title="What tools do you use?">
              <div className="answer">
                <p>
                  Our banners are hand coded using HTML, CSS, and Javascript, as
                  well as employing animation technologies such as GSAP3,
                  Anime.js, CSS Animation, and HTML5 Canvas.
                </p>
              </div>
            </Toggle>
            <Toggle title="What size banners can you make?">
              <div className="answer">
                <p>
                  We can customize our banners to fit any size requirements you
                  have. The sizes we most commonly make are 300x250, 160x600,
                  300x600, 728x90, 970x250, 300x50, and 320x50.
                </p>
              </div>
            </Toggle>
            <Toggle title="What can I expect as far as deliverables?">
              <div className="answer">
                <p>
                  We will provide you with all the files you’ll need in order to
                  get your files into your ad platform of choice. This will
                  include all the HTML/CSS/JS files, as well as the fonts and
                  images that were used.
                </p>
              </div>
            </Toggle>
            <Toggle title="What is your turnaround time?">
              <div className="answer">
                <p>
                  Usually a set of banners (which included 6 sizes) can be
                  completed in just a few days.
                </p>
              </div>
            </Toggle>
          </AnimateSharedLayout>
        </FaqPage>
      </ContentWrapper>
    </Container>
  );
};

const FaqPage = styled.div`
  display: block;
  margin: auto;
  /* padding: 0 4rem; */
  color: white;

  h2 {
    padding-bottom: 2rem;
    font-weight: lighter;
  }
  .faq-line {
    background: #cccccc;
    height: 0.2rem;
    margin: 2rem 0rem;
    width: 100%;
  }
  .question {
    padding: 3rem 0rem;
    cursor: pointer;
  }
  .answer {
    padding: 2rem 0rem;
    p {
      padding: 1rem 0rem;
    }
  }
`;

export default FaqSection;
