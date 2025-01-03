import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Emails from "./emails.component";
import Frontend from "./frontend.component";
import { ReactComponent as Codepen } from "../../assets/codepen.svg";
import { ReactComponent as Codesandbox } from "../../assets/codesandbox.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Github } from "../../assets/github.svg";
import { ReactComponent as Stackblitz } from "../../assets/stackblitz.svg";
import { ReactComponent as Youtube } from "../../assets/youtube.svg";

const Projects = () => {
  return (
    <div id="projects">
      <Tabs>
        <TabList>
          <h2>Projects</h2>
          <div>
            <Tab  default={true}>Landing pages</Tab>
            <Tab>Full Projects</Tab>
          </div>
        </TabList>

        <TabPanel>
          <Frontend />
        </TabPanel>
        <TabPanel>
          <Emails />
        </TabPanel>
      </Tabs>

      <h2>Activities</h2>
      
      <div className="gridlayout4">
      <div>
          <div>
            <Github />
          </div>
          <h3>GitHub</h3>
          <p>
          "Complete projects on GitHub developed using Spring Boot and React, showcasing full-stack application development, including RESTful APIs, responsive front-end interfaces, and efficient back-end services."
          </p>
          <a
            href="https://github.com/Mohamed-Mohamed-Afifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Repositories /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Stackblitz />
          </div>
          <h3>Leetcode</h3>
          <p>
          "Some problem-solving projects using Java, focusing on developing efficient algorithms and implementing solutions to tackle complex challenges in data structures, algorithms, and system design."
          </p>
          <a
            href="https://leetcode.com/Mohamed-Mohamed-Afifi/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Leetcode /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Codepen />
          </div>
          <h3>Codepen</h3>
          <p>
          "Some front-end projects developed using JavaScript, React, and Bootstrap, focusing on creating responsive, user-friendly interfaces and dynamic web applications that enhance user experience and functionality."
          </p>
          <a
            href="https://codepen.io/Mohamed_afifi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Pens /&gt;</h4>
          </a>
        </div>

        <div>
          <div>
            <Figma />
          </div>
          <h3>Figma</h3>
          <p>
          "Some designs on Figma, showcasing user-centric interfaces, modern layouts, and responsive designs for web and mobile apps."
          </p>
          <a
            href="https://www.figma.com/proto/2PPc8u7JWC8tRmk9loiXln/%D8%B5%D9%88%D8%A7%D9%85%D8%B9-%D9%85%D9%86%D9%88%D9%81?node-id=820-10411&p=f&t=A86ZMnPEgNDc2ete-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=820%3A10411"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Designs /&gt;</h4>
          </a>
        </div>
        <div>
          <div>
            <Youtube />
          </div>
          <h3>YouTube</h3>
          <p>
 Created educational programming tutorials on front-end, back-end, and software engineering, simplifying complex 
concepts to improve coding skills.

          </p>
          <a
            href="https://www.youtube.com/@FP0353"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h4>&lt; Videos /&gt;</h4>
          </a>
        </div>

      </div>
    </div>
  );
};

export default Projects;
