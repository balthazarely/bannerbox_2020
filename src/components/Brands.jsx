import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { scrollReveal } from "../animation";
import { useScroll } from "./useScroll";
import { Container, ContentWrapper } from "../layoutStyles";

export default function Brands() {
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
          <span>Brands</span> we've worked with
        </h2>
        <LogoContainer>
          <Logo>
            <img src="logos/dish-logo.svg" alt="" />
          </Logo>
          <Logo>
            <img src="logos/sling-tv-logo.svg" alt="" />
          </Logo>
          <Logo>
            <img src="logos/on-tech-logo.svg" alt="" />
          </Logo>
          <Logo>
            <img src="logos/dish-latino-logo.svg" alt="" />
          </Logo>
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
  padding: 0 2rem;
`;
const Logo = styled.div`
  width: 205px;
  height: auto;
  max-height: 100px;
  margin: 1rem;
  @media (max-width: 1400px) {
    width: 150px;
    height: auto;
  }
  @media (max-width: 1050px) {
    width: 130px;
    height: auto;
  }
  img {
    width: 100%;
    height: 100%;
  }
`;
