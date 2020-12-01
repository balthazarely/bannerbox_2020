import React from "react";
import { Container, ContentWrapper } from "../layoutStyles";

export default function Test() {
  return (
    <Container>
      <ContentWrapper>
        <h1>This is a Test Div</h1>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
          itaque quod qui ipsam eveniet suscipit laborum veritatis dolorem,
          nesciunt provident velit laudantium sapiente pariatur porro, quam ut
          temporibus excepturi.
        </p>
        <p style={{ color: "white" }}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi aperiam
          itaque quod qui ipsam eveniet suscipit laborum veritatis dolorem,
          nesciunt provident velit laudantium sapiente pariatur porro, quam ut
          temporibus excepturi.
        </p>
      </ContentWrapper>
    </Container>
  );
}
