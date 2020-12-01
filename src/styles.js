import styled from "styled-components";
import { motion } from "framer-motion";

export const AboutContainer = styled(motion.div)`
  width: 100vw;
  display: flex;
  height: 90vh;
  align-items: center;
  justify-content: center;
  padding: 0 10rem;
`;

export const About = styled.div`
  min-height: 75vh;
  max-width: 1400px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  color: white;
  @media (max-width: 850px) {
    display: block;
    padding-top: 2rem;
    text-align: center;
  }
`;

export const Description = styled.div`
  flex: 1;
  padding-right: 0.5rem;
  z-index: 2;
  @media (max-width: 768px) {
    padding-right: 0rem;
  }
  h2 {
    font-weight: lighter;
  }
`;
export const Image = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 2;
  img {
    height: auto;
    width: 100%;
    max-width: 400px;
    object-fit: cover;
    overflow: hidden;
  }
`;

export const Hide = styled.div`
  overflow: hidden;
`;
