import styled from "styled-components";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  width: 100vw;
  padding: 7rem 10rem;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 850px) {
    padding: 10rem 3rem;
  }
  h1,
  h2 {
    @media (max-width: 850px) {
      text-align: center;
    }
  }
`;

export const ContentWrapper = styled(motion.div)`
  max-width: 1400px;
  width: 100%;
`;
