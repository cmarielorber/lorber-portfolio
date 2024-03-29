import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/boho-logo.svg";
import { ArrowRightCircle } from "react-bootstrap-icons";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  // eslint-disable-next-line no-unused-vars
  const [index, setIndex] = useState(1);
  const toRotate = ["Hi! I'm Christen"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === "") {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>
                    {text}
                    <span className="txt-rotate" iod="1000">
                      <span className="wrap" data-rotate='[ "" ]'></span>
                    </span>
                    <br></br>
                    {`Web Developer`}
                  </h1>
                  <p>
                    Personable and passionate creator and web developer with a
                    background in accommodations and customer service and a full
                    stack certificate from University of California, San Diego.
                    I have honed my skills in JavaScript, React, SQL, Express
                    and Node to develop meaningful server-side applications. I
                    am able to collaborate and work with a team while solving
                    problems in high-stress environments. An articulate
                    individual who enjoys connecting with co-workers and is
                    passionate about building applications that assist people to
                    make their lives easier. Looking to bring my attention to
                    detail and technical skills to a company to grow and become
                    a valuable asset.
                  </p>
                  <button
                  rel="noreferrer" target="_blank"
                    onClick={() =>
                      (window.location.href =
                        "https://drive.google.com/file/d/1IpYQPFz47mTmNfvMuAaPaZILo-3XGE0o/view?usp=share_link")
                    }
                  >
                    Resume <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
