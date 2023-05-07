import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/Book_Cover.jpg";
import projImg2 from "../assets/img/bakunawa_3.png";
import projImg3 from "../assets/img/app_1.png";
import projImg4 from "../assets/img/web_1.png";
import projImg5 from "../assets/img/BROWN_03-01.png";
import projImg6 from "../assets/img/web_3.png";
import proj2Img1 from "../assets/img/cert_1.png";
import proj2Img2 from "../assets/img/web_2.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      title: "Book Cover",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Logo Design",
      description: "Web & Logo Design",
      imgUrl: projImg6,
    },
    {
      title: "Kyrna Talking A.I",
      description: "Android App and Design",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Logo Design",
      description: "Winner in logo making contest",
      imgUrl: projImg5,
    },
    {
      title: "Business Logo Design",
      description: "Design & Development",
      imgUrl: projImg2,
    },
  ];

  const project2 = [
    {
      title: "Book Cover",
      description: "Design & Development",
      imgUrl: proj2Img1,
    },
    {
      title: "Book Cover",
      description: "Design & Development",
      imgUrl: proj2Img2,
    },
  ];

  // const project3 = [
  //   {
  //     title: "Book Cover",
  //     description: "Design & Development",
  //     imgUrl: image_1,
  //   },
  // ];

  return (
    <section className="project" id="projects">
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
                    I'm a creative designer and developer. I'm passionate about
                    creating beautiful, functional designs that are not only
                    visually appealing but also user-friendly. I have experience
                    in web design, website development, logo design, and Android
                    app development. My designs have won recognition, including
                    the school logo-making contest, which was a great honor for
                    me. I love challenging myself with new projects and taking
                    on different design projects, including book covers. I enjoy
                    collaborating with clients to understand their needs, ideas,
                    and objectives and using my creativity to bring their vision
                    to life. If you're looking for a reliable and skilled
                    designer to help you bring your project to life, I'm your
                    person!
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Web & App</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Achievements</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Tab 3</Nav.Link>
                      </Nav.Item>
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
                      <Tab.Pane eventKey="second">
                        <Row>
                          {project2.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {/* {project3.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })} */}
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
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
