import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import React from "react";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/socal-logo.png";
import projImg2 from "../assets/img/team-profile.png";
import projImg3 from "../assets/img/beerstack-logo.png";
import projImg4 from "../assets/img/weather-dashboard.png";
import projImg5 from "../assets/img/mongodb.png";
import projImg6 from "../assets/img/techblog.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "So-Cal Brew Hopper",
      description:
        "Using HTML, CSS, Canva, JavaScript, JQuery, Bootstrap, Postman; Brew Hopper is an interactive tool that allows our user to search for desired breweries in the San Diego area and turn their destination into a custom user bucket list at the top of the site using a toggle button.",
      imgUrl: projImg1,
      url: "https://isaacagonzalez.github.io/Bootcamp-Project-1/",
    },
    {
      title: "Team-Profile Generator",
      description:
        "This project demonstrates the use of Object-Oriented Programming (OOP) and Test Driven Development (TDD). The Team Profile Generator is a command-line-input application from Node that generates a team profile based on a user's input with the module Inquirer from Node.js. Once prompted, the user will enter however many team members they desire. Once the user's team is complete, an html is generated to display the team using the FS module.",
      imgUrl: projImg2,
      url: "https://github.com/cmarielorber/Team_Profile_Generator",
    },
    {
      title: "BeerStack",
      description:
        "BeerStack is designed to be a full-stack CMS-style blog site where it's user can interact with other users.",
      imgUrl: projImg3,
      url: "https://socal-beerstack.herokuapp.com/",
    },
    {
      title: "5-Day Weather Dashboard",
      description:
        "Using bootstrap, moment, JQuery and JavaSript; the Dashboard provides the user with a 5-Day weather report for their desired destination. The city is then stored on the page, using local storage, and can be revisted when clicked. OpenWeather API was used to retrieve the weather data for the cities.",
      imgUrl: projImg4,
      url: "https://cmarielorber.github.io/5-Day-Weather/",
    },
    {
      title: "NoSQL Social Network API",
      description:
        "This project is an API for a social network web application where users can share thoughts, reactions, create a friends' list and react their friend's thoughts. I used Express.js to route, MongoDB for a database, Mongoose Object Data Modeling library, Insomnia to seed data, and Moment.js to create timestamps.",
      imgUrl: projImg5,
      url: "https://github.com/cmarielorber/NoSQL-Social-Network-API",
    },
    {
      title: "MVC Tech Blog",
      description:
        "The Tech Blog is my first attempt at a full-stack CMS-style blog site where it's user can interact with other Tech users. Once login is authenticated, a user has access to their own dashboard where they can edit, delete and add posts and comments. The Tech Blog is structured with the MVC paradigm using handlebars, bcrypt, express.sessions, sequelize, and more to create an optimized blogging experience.",
      imgUrl: projImg6,
      url: "https://mvc-tech-blog-lorber.herokuapp.com/",
    },
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
                      {/* <Tab.Pane eventKey="second">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                    </Tab.Pane> */}
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
