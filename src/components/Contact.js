import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/hand-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import React, { useRef } from "react";

export const Contact = () => {
  const form = useRef();
  const [confirmationMessage, setConfirmationMessage] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_hhq38nq",
        "template_rwfi2hd",
        form.current,
        "-FKEUDimW52hHbBAt"
      )
      .then(
        (result) => {
          console.log(result.text);
          setConfirmationMessage("Your email has been sent!")
        },
        (error) => {
          console.log(error.text);
        }
      );
    form.current.reset();
  };

  // eslint-disable-next-line no-unused-vars
  const [buttonText, setButtonText] = useState("Send");

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="hands"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="name"
                          type="text"
                          placeholder="Name"
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="email"
                          type="email"
                          placeholder="Email Address"
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          placeholder="Message"
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      {confirmationMessage && (
                        <Col>
                          <p style={{ color: "#6d9886"}}
                            className=
                              "success">{confirmationMessage}</p>
                        </Col>
                      )}
                    </Row>
                  </form>
                  
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
