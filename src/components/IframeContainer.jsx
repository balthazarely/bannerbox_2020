import React from "react";
import Iframe from "react-iframe";
import styled from "styled-components";
import { motion } from "framer-motion";

export default function IframeContainer({ selectedIframe }) {
  const { width, height } = selectedIframe;
  return (
    <IframeWrapper>
      <Iframe
        url={selectedIframe.src}
        width={width}
        height={height}
        id="myId"
        frameBorder="0"
      />
    </IframeWrapper>
  );
}

const IframeWrapper = styled(motion.div)`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  z-index: 10000;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
