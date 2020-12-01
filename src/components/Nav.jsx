import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const { pathname } = useLocation();
  return (
    <StyledNav>
      <Link to="/">
        <SiteLogo src="bannerboxLogo.svg" alt="logo" />
      </Link>

      <ul>
        <li>
          <Link to="/">About</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/" ? "100%" : "0%" }}
          />
        </li>
        <li>
          <Link to="/contact">Contact</Link>
          <Line
            transition={{ duration: 0.75 }}
            initial={{ width: "0%" }}
            animate={{ width: pathname === "/contact" ? "100%" : "0%" }}
          />
        </li>
      </ul>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  min-height: 10vh;
  display: flex;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0rem 10rem;
  background: #282828;
  position: sticky;
  top: 0;
  z-index: 501;
  a {
    color: white;
    text-decoration: none;
  }
  ul {
    display: flex;
    list-style: none;
  }
  #logo {
  }
  li {
    /* padding-left: 10rem; */
    margin-left: 5rem;
    width: 70px;
    position: relative;
    padding-right: 0.25rem;
    text-align: right;
  }
  @media (max-width: 768px) {
    flex-direction: column;
    width: 100vw;
    #logo {
      display: inline-block;
      /* margin: 1rem; */
    }
    ul {
      padding-top: 1.5rem;
      padding-bottom: 3rem;
      justify-content: space-around;
      width: 100vw;
      li {
        text-align: center;
        padding: 0;
        margin-left: 0rem;
      }
    }
  }
`;

const SiteLogo = styled.img`
  height: 70px;
  width: 150px;
`;

const Line = styled(motion.div)`
  height: 0.3rem;
  background: #23d997;
  width: 0%;
  position: absolute;
  bottom: -80%;
  right: 0%;
  @media (max-width: 1300px) {
    right: 0%;
  }
`;

export default Nav;
