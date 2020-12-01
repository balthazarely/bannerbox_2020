import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { Container, ContentWrapper } from "../layoutStyles";
import {
  faRulerCombined,
  faCode,
  faWindowRestore,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ServicesSection() {
  const [element, controls] = useScroll();

  return (
    <Container
      ref={element}
      animate={controls}
      initial="hidden"
      variants={scrollReveal}
    >
      <ContentWrapper>
        <h2 style={{ color: "white" }}>
          Our <span>Promise</span>
        </h2>
        <LogoContainer>
          <Card>
            <div>Pixel Perfect Design</div>
            <Icon>
              <FontAwesomeIcon icon={faRulerCombined} />
            </Icon>
            <Text>
              Our experience as designers &#38; developers ensures precise and
              beautiful work.
            </Text>
          </Card>
          <Card>
            <div>Quality Assurance</div>
            <Icon>
              <FontAwesomeIcon icon={faWindowRestore} />
            </Icon>
            <Text>
              Our work is optimized to look good, no matter what browser it is
              viewed on.
            </Text>
          </Card>
          <Card>
            <div>Amazing Animations</div>
            <Icon>
              <FontAwesomeIcon icon={faCode} />
            </Icon>
            <Text>
              We use the newest web technologies, including GSAP, Canvas and CSS
              Animation for complex animations.
            </Text>
          </Card>
        </LogoContainer>
      </ContentWrapper>
    </Container>
  );
}

const LogoContainer = styled.div`
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  align-items: space-between;
  justify-content: space-around;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;
const Card = styled.div`
  width: 350px;
  height: 270px;
  color: #23d997;
  background: #282828;
  border-radius: 25px;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  box-shadow: 0px 3px 15px rgba(0, 0, 0, 0.2);
`;

const Icon = styled.div`
  margin: 1rem;
  font-size: 3rem;
`;

const Text = styled.div`
  font-size: 1.2rem;
  color: white;
  font-weight: 200;
`;
