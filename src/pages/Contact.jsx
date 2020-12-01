import React, { useState } from "react";
import firebase from "../firebase";
//Animations
import { motion } from "framer-motion";
import { pageAnimation, titleAnim, contactAnim, fade } from "../animation";

import styled from "styled-components";
import ScrollTop from "../components/ScrollTop";
import { useHistory } from "react-router-dom";
import { Container, ContentWrapper } from "../layoutStyles";

const ContactUs = () => {
  const history = useHistory();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState(false);
  const [success, setSuccess] = useState(false);

  function emailIsValid(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  const handleForm = () => {
    if (
      contact.name !== "" &&
      emailIsValid(contact.email) &&
      contact.message !== ""
    ) {
      firebase.firestore().collection("contact-list").add(contact);
      setError(false);
      setSuccess(true);
      setTimeout(() => {
        history.push(`/`);
      }, 1000);
    } else {
      setError(true);
    }
  };

  return (
    <Container
      exit="exit"
      variants={pageAnimation}
      initial="hidden"
      animate="show"
      // style={{ color: "#fff" }}
    >
      <ContentWrapper>
        <Title>
          <Hide>
            <motion.h2 variants={titleAnim}>Send us a message!</motion.h2>
          </Hide>
        </Title>
        {error ? (
          <Error variants={fade}>
            Make sure you've entered your infomation correctly
          </Error>
        ) : null}
        <motion.div variants={titleAnim}>
          <Hide>
            <Social>
              {/* <h4>Send Us A Message</h4> */}
              <Input
                type="text"
                placeholder="Your name"
                onChange={(e) =>
                  setContact({ ...contact, name: e.target.value })
                }
              />
            </Social>
          </Hide>
          <Hide>
            <Social>
              {/* <h4>Send Us A Message</h4> */}
              <Input
                type="text"
                placeholder="Your email"
                onChange={(e) =>
                  setContact({ ...contact, email: e.target.value })
                }
              />
            </Social>
          </Hide>
          <Hide>
            <Social>
              {/* <h4>Send Us A Message</h4> */}
              <Input
                type="text"
                placeholder="Your Message"
                // style={{ height: "300px" }}
                onChange={(e) =>
                  setContact({ ...contact, message: e.target.value })
                }
              />
            </Social>
          </Hide>
          <motion.button variants={fade} onClick={handleForm}>
            Contact Us
          </motion.button>
          {success ? (
            <Success variants={fade}>
              Thank you! We will be in touch shortly!
            </Success>
          ) : null}
        </motion.div>
        <ScrollTop />
      </ContentWrapper>
    </Container>
  );
};

const ContactStyle = styled(motion.div)`
  padding: 5rem 10rem;
  color: #353535;
  min-height: 90vh;
  @media (max-width: 1500px) {
    padding: 2rem;
    font-size: 1rem;
  }
`;
const Title = styled.div`
  margin-bottom: 4rem;
  color: black;
  @media (max-width: 1500px) {
    margin-top: 5rem;
  }
`;
const Hide = styled.div`
  overflow: hidden;
  color: white;
`;

const Social = styled(motion.div)`
  /* display: flex; */
  display: block;
  align-items: center;
  h2 {
    margin: 2rem;
  }
`;

const Lable = styled(motion.Lable)`
  /* margin-top: 1rem; */
`;
const Input = styled(motion.input)`
  height: 50px;
  width: 450px;
  border: 1px solid lightgray;
  margin-top: 0.2rem;
  margin-bottom: 1rem;
  display: block;
  padding-left: 1rem;
  &:focus {
    outline: none;
  }
  ::placeholder,
  ::-webkit-input-placeholder {
    color: lightgray;
  }
`;

const Error = styled(motion.div)`
  color: white;
  font-size: 1.5rem;
`;

const Success = styled(motion.div)`
  margin-top: 1rem;
  color: white;
  font-size: 2rem;
`;

export default ContactUs;
