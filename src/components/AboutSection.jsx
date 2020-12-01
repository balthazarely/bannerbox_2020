import React from "react";
import { About, Hide, Description, Image, AboutContainer } from "../styles";
import { motion } from "framer-motion";
import { titleAnim, fade } from "../animation";
import Wave from "./Wave";
import Computer from "./Computer";
import ScrollTop from "./ScrollTop";
import { Link } from "react-router-dom";

export default function AboutSection() {
  return (
    <AboutContainer>
      <ScrollTop />
      <About>
        <Description>
          <motion.div>
            <Hide>
              <motion.h1 variants={titleAnim}>Let us bring</motion.h1>
            </Hide>
            <Hide>
              <motion.h1 variants={titleAnim}>
                your <span>designs</span>
              </motion.h1>
            </Hide>
            <Hide>
              <motion.h1 variants={titleAnim}>to life.</motion.h1>
            </Hide>
          </motion.div>
          <motion.p variants={fade}>
            Creating premium HTML5 web banners for the modern web.
          </motion.p>
          <Link to="/contact">
            <motion.button variants={fade}>Contact Us</motion.button>
          </Link>
        </Description>
        <Image>
          {/* <motion.img variants={photoAnim} src="computer.svg" /> */}
          <Computer />
        </Image>
        <Wave />
      </About>
    </AboutContainer>
  );
}
