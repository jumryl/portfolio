import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
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
              <h2>Skills</h2>
              <p>
                Every day I enhance my development capabilities through practice
                and real-world projects.<br></br> Here are the technical skills
                I actively use and improve on.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>C# / .NET (MVC, WPF, Windows Services)</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>SQL Server / SSMS / MySQL</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>ASP.NET / Entity Framework</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript / jQuery / HTML / CSS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Flutter / Android Development</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>API Integration / REST APIs / Postman</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Git / Visual Studio / IIS</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>Machine Learning / ML.NET / Tesseract OCR</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Agile / Scrum / JWT Authentication</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
