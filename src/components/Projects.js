import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/socal-logo.png";
import projImg2 from "../assets/img/beerstack-logo.png";
import projImg3 from "../assets/img/weather-dashboard.png";
import projImg4 from "../assets/img/mongodb.png";
import projImg5 from "../assets/img/parenthelperhub.png";
// import projImg6 from "../assets/img/techblog.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "So-Cal Brew Hopper",
      description:
        "Using HTML, CSS, Canva, JavaScript, JQuery, Bootstrap, Postman; Brew Hopper is an interactive tool that allows our user to search for desired breweries in the San Diego area and turn their destination into a custom user bucket list at the top of the site using a toggle button.",
      imgUrl: projImg1,
      deployurl: "https://isaacagonzalez.github.io/Bootcamp-Project-1/",
      githuburl: "https://github.com/cmarielorber/SoCal_Brew_Hopper/"
    },
    {
      title: "BeerStack",
      description:
        "BeerStack is designed to be a full-stack CMS-style blog site where it's user can interact with other users.",
      imgUrl: projImg2,
      deployurl: "https://socal-beerstack.herokuapp.com/",
      githuburl: "https://github.com/cmarielorber/BeerStack"
    },
    {
      title: "5-Day Weather Dashboard",
      description:
        "Using bootstrap, moment, JQuery and JavaSript; the Dashboard provides the user with a 5-Day weather report for their desired destination. The city is then stored on the page, using local storage, and can be revisted when clicked. OpenWeather API was used to retrieve the weather data for the cities.",
      imgUrl: projImg3,
      deployurl: "https://cmarielorber.github.io/5-Day-Weather/",
      githuburl: "https://github.com/cmarielorber/5-Day-Weather/"
    },
    {
      title: "NoSQL Social Network API",
      description:
        "This project is an API for a social network web application where users can share thoughts, reactions, create a friends' list and react their friend's thoughts. I used Express.js to route, MongoDB for a database, Mongoose Object Data Modeling library, Insomnia to seed data, and Moment.js to create timestamps.",
      imgUrl: projImg4,
      deployurl:"https://drive.google.com/file/d/16U3zYYxq0xzxKisYLnMeoSPAC18kv5Wp/view",
      githuburl: "https://github.com/cmarielorber/NoSQL-Social-Network-API",
    },
    {
      title: "Parent Helper Hub",
      description:
        "Full-stack application with a user-friendly interface providing single parents with access to resources and support for both the parent and their children.",
      imgUrl: projImg5,
      deployurl: "https://parent-helper-hub.herokuapp.com/",
      githuburl: "https://github.com/cmarielorber/parent-helper-hub/"
    },
    // {
    //   title: "MVC Tech Blog",
    //   description:
    //     "Full-stack CMS-style blog site where it's user can interact with other Tech users. Once login is authenticated, a user has access to their own dashboard where they can edit, delete and add posts and comments.",
    //   imgUrl: projImg6,
    //   deployurl: "https://parent-helper-hub.herokuapp.com/",
    //   githuburl: "https://github.com/cmarielorber/MVC_Tech_Blog/"
    // },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    One major quality to the Web Devlopment realm is the
                    infinite opportunity to learn. New technologies, new
                    understandings, open mindedness and team effort play
                    important roles to each project. The following are a mix of
                    bootcamp and personal projects. They demonstrate my
                    "full-stack" understanding and continue to be works in
                    progress.{" "}
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      {/* <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item> */}
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" alt="background gradient"></img>
    </section>
  );
};
