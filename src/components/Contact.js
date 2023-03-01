import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/hand-img.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Contact = () => {
  const formInitialDetails = {
    name: "",
    email: "",
    message: "",
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  // eslint-disable-next-line no-unused-vars
  const [buttonText, setButtonText] = useState("Send");
  // eslint-disable-next-line no-unused-vars
  const [status, setStatus] = useState({});

  const onFormUpdate = (e) => {
    setFormDetails({
      ...formDetails,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = async (e) => {
  //   e.preventDefault();
  //   setButtonText("Sending...");
  //   let response = await fetch("http://localhost:5000/contact", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json;charset=utf-8",
  //     },
  //     body: JSON.stringify(formDetails),
  //   });
  //   setButtonText("Send");
  //   let result = await response.json();
  //   setFormDetails(formInitialDetails);
  //   if (result.code === 200) {
  //     setStatus({ succes: true, message: 'Message sent successfully'});
  //   } else {
  //     setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
  //   }
  // };

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
                  <form
                    action="https://formsubmit.co/christenmlorber@gmail.com"
                    method="POST"
                  >
                    <Row>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="name"
                          type="text"
                          value={formDetails.name}
                          placeholder="Name"
                          onChange={onFormUpdate}
                          required
                        />
                      </Col>
                      <Col size={12} sm={6} className="px-1">
                        <input
                          name="email"
                          type="email"
                          value={formDetails.email}
                          placeholder="Email Address"
                          onChange={onFormUpdate}
                          required
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          name="message"
                          rows="6"
                          value={formDetails.message}
                          placeholder="Message"
                          onChange={onFormUpdate}
                          required
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                      <input
                        name="_url"
                        type="hidden"
                        value="https://cmarielorber.github.io/lorber-portfolio"
                      />
                      {status.message && (
                        <Col>
                          <p
                            className={
                              status.success === false ? "danger" : "success"
                            }
                          >
                            {status.message}
                          </p>
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
