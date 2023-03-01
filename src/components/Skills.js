import plant from "../assets/img/plant.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Technical Skills</h2>
              <p>
                Below are some of the skills I have obtained through UCSD's
                Full-Stack Bootcamp.<br></br>To master these skills, I use
                platforms such as Codecademy, Udemy, and YouTube videos, and
                create personal projects to add to my portfolio.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={plant} alt="skills 1" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 2" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 3" />
                  <h5>HTML 5</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>SQL</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>NoSQL</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>MongoDB</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>MySQL</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>Express</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>jQuery</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>CSS3</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>Node</h5>
                </div>
                <div className="item">
                  <img src={plant} alt="skills 4" />
                  <h5>Design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
