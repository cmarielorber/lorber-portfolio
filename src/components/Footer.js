import { Container, Row, Col } from "react-bootstrap";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
// import navIcon3 from "../assets/img/nav-icon3.svg";
// const styles ={
//   copyright:{
//     color: "#b8b8b8",
//     fontSize: "15px",
//     display: "flex",
//     justifyContent: "center",
//     alignText: "center",
//   }
// }
export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6}>
            <img src={logo} alt="Boho Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/christen-lorber/">
                <img src={navIcon1} alt="Linked In Icon" />
              </a>
              <a href="https://github.com/cmarielorber/">
                <img src={navIcon2} alt=" GitHub Icon" />
              </a>
            </div>
            <p className="emailfont">christenmlorber@gmail.com</p>
          </Col>
          {/* <Row style={styles.copyright}>Copyright 2023. All Rights Reserved</Row> */}
        </Row>
      </Container>
    </footer>
  );
};
