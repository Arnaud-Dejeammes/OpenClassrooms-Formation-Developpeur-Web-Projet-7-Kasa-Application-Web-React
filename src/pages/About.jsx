import styled from "styled-components"
import Dropdown from "../components/Dropdown";

const AboutStyle = styled.div`
  width: 1440px;
  height: 1024px;

  @media (max-width: 365px) {
    width: 375px;
    height: 812px;
  }
`

function About() {
    return (
      // <div className="App">A propos</div>
      <AboutStyle>
        <Dropdown/>
      </AboutStyle>
    )
}

export default About;
