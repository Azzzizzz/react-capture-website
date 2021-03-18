import home1 from "../img/home1.png";
// Styled
// import styled from "styled-components";
import { About, Description, Image, Hide } from "../styles";
const AboutSection = () => {
  return (
    <About>
      <Description>
        <div className="title">
          <Hide>
            <h2>We work to make</h2>
          </Hide>
          <Hide>
            <h2>
              your <span>dreams</span> come
            </h2>
          </Hide>
          <Hide>
            <h2>true.</h2>
          </Hide>
        </div>
        <p>
          Contact us for any photography and videography ideas that you have. We
          have professioinals with amazing skills.
        </p>
        <button>Contact Us</button>
      </Description>
      <Image>
        <img src={home1} alt="cameraman" />
      </Image>
    </About>
  );
};

// Styled Components

export default AboutSection;
