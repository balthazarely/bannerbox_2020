import React from "react";
import styled from "styled-components";

const Footer = () => {
  return (
    <StyledNav>
      <h1>
        <SiteLogo src="bannerboxLogo.svg" alt="logo" />
      </h1>
      <TextBox>
        Thanks for stopping by! <br />
        Check out my other work
        <a
          href="https://www.balthazar-ely.com/"
          target="BLANK"
          style={{ color: "white", fontSize: "13px" }}
        >
          here
        </a>
      </TextBox>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 20vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 501;
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    text-align: center;
    #logo {
      display: inline-block;
      /* margin: 1rem; */
    }
  }
`;
const SiteLogo = styled.img`
  height: 70px;
  width: 150px;
  @media (max-width: 768px) {
    margin-top: 2rem;
  }
`;

const TextBox = styled.div`
  color: white;
  text-align: right;
  font-size: 13px;
  line-height: 15px;
  @media (max-width: 768px) {
    text-align: center;
    margin-bottom: 1rem;
  }
`;

export default Footer;
