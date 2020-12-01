import React, { useState, useEffect } from "react";
import Popup from "reactjs-popup";
import styled from "styled-components";

const AdBlockerModal = () => {
  const [open, setOpen] = useState(false);
  const [usingAblocker, setUsingAdblocker] = useState(false);

  const testAdBlock = async () => {
    try {
      return fetch(
        new Request(
          "https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",
          {
            method: "HEAD",
            mode: "no-cors",
          }
        )
      )
        .then(function (response) {
          console.log(response, "NO ADBLOCKED");
          setOpen(false);
        })
        .catch(function (e) {
          console.log(e, "PROBABLY USING A ADBLOCKER");
          setOpen(true);
        });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    setTimeout(() => {
      testAdBlock();
    }, 2500);
  }, []);

  return (
    <Popup open={open}>
      <Container className="bg" onClick={() => setOpen(false)}>
        <Modal className="modal">
          <h2>Well, this is awkward...</h2>
          <p>
            We use adblockers as well, but in order for our banners to load
            properly, we ask that you disable yours.
          </p>
          <div>
            <Button>close</Button>
          </div>
        </Modal>
      </Container>
    </Popup>
  );
};
export default AdBlockerModal;
const Modal = styled.div`
  background: white;
  max-width: 400px;
  max-height: 500px;
  padding: 50px;
  z-index: 10000;
  border-radius: 10px;
  h2 {
  }
`;

const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  transition: 0.5s;
  background: rgba(0, 0, 0, 0.75);
  position: fixed;
  top: 0;
  left: 0;
  z-index: 5001;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Button = styled.div`
  font-weight: bold;
  font-size: 1.1.rem;
  width: 100px;
  text-align: center;
  cursor: pointer;
  padding: 0.75rem 2rem;
  margin: auto;
  border: 2px solid #23d997;
  background: #1b1b1b;
  color: white;
  transition: all 0.1s ease;
  transition-timing-function: ease;
  font-family: "Inter", sans-serif;
  &:hover {
    background-color: #23d997;
    color: white;
  }
`;
