import React from "react";
import Tab from "react-bootstrap/Tab";
import Tabs from "react-bootstrap/Tabs";
import SkillsTab from "./SkillsTab";
import Row from "react-bootstrap/Row";
import { Jumbotron, Container } from "react-bootstrap";
import { useScrollPosition } from "../../hooks/useScrollPosition";

function Skills({ heading, hardSkills, softSkills }) {
  const skillsTabRef = React.useRef();
  const [isScrolled, setIsScrolled] = React.useState(false);
  //const navbarDimensions = useResizeObserver(navbarMenuRef);

  useScrollPosition(
    ({ prevPos, currPos }) => {
      if (!isScrolled && currPos.y - 400 < 0) setIsScrolled(true);
    },
    [],
    skillsTabRef
  );
  return (
    <Jumbotron ref={skillsTabRef} fluid className="bg-white m-0" id="skills">
      <Container className="p-5 ">
        <h2 ref={skillsTabRef} className="display-4 pb-5 text-center">
          {heading}
        </h2>
        https://github.com/kvnchu2/portfolio-website/blob/master/public/javascript.png?raw=true
        <div class="language-icons">
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/html.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/css.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/javascript.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/ruby.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/rails.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/sass.png?raw=true" alt="html"></img>
          <img src="https://github.com/kvnchu2/portfolio-website/blob/master/public/mongoDB.png?raw=true" alt="html"></img>
          <img src="https://raw.githubusercontent.com/cncf/landscape/bdfb4dbd38462ab28d3600e83cd721b2642c756d/hosted_logos/postgre-sql.svg" alt="html"></img>
        </div>
        {/* <Tabs
          className="skills-tabs"
          defaultActiveKey="hard-skills"
          id="skills-tabs"
        >
          <Tab
            tabClassName="skills-tab lead"
            eventKey="hard-skills"
            title="Technical Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={hardSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
          <Tab
            tabClassName="skills-tab lead"
            eventKey="soft-skills"
            title="Soft Skills"
          >
            <Row className="pt-3 px-1">
              <SkillsTab skills={softSkills} isScrolled={isScrolled} />
            </Row>
          </Tab>
        </Tabs> */}
      </Container>
    </Jumbotron>
  );
}

export default Skills;
