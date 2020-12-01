import { motion } from "framer-motion";
import React from "react";
import { pageAnimation } from "../animation";
import AboutSection from "../components/AboutSection";
import BannerCollection from "../components/BannerCollection";
import Brands from "../components/Brands";
import FaqSection from "../components/FaqSection";
import Footer from "../components/Footer";
import ScrollTop from "../components/ScrollTop";
import ServicesSection from "../components/ServicesSection";

export default function AboutUs() {
  return (
    <motion.div
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      exit="exit"
    >
      <AboutSection />
      <ServicesSection />
      <BannerCollection />
      <FaqSection />
      <Brands />
      <Footer />
      <ScrollTop />
    </motion.div>
  );
}
