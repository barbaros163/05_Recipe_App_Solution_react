import coding from "../../assets/coding.svg";
import { AboutContainer } from "./About.style";

const About = () => {
  return (
    <AboutContainer>
      <img src={coding} alt={coding} />
      <h1>About Software Developer Yasin Yavuz</h1>
      <div className="p1">
        <p>I'm Yasin</p>
        <p>I'm currently learning Front End Developemnt Languages.</p>
        <p>I've already known JS, ReactJS, ReactNative, NodeJS.</p>
        <p>Send email: barbaros1675@gmail.com</p>
      </div>
    </AboutContainer>
  );
};

export default About;
