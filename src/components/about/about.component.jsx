import React from "react";
import { ReactComponent as Html } from "../../assets/html.svg";
import { ReactComponent as Css } from "../../assets/css.svg";
import { ReactComponent as Js } from "../../assets/js.svg";
import { ReactComponent as Ts } from "../../assets/ts.svg";
import { ReactComponent as Node } from "../../assets/node.svg";
import { ReactComponent as Reacti } from "../../assets/react.svg";
import { ReactComponent as Fire } from "../../assets/fire.svg";
import { ReactComponent as Boot } from "../../assets/boot.svg";
import { ReactComponent as Figma } from "../../assets/figma.svg";
import { ReactComponent as Git } from "../../assets/git.svg";
import { ReactComponent as Gulp } from "../../assets/gulp.svg";
import { ReactComponent as Post } from "../../assets/post.svg";

const About = () => {
  return (
    <div id="about">
      <div>
        <h2>About</h2>
        <p>
          Hello! My name is Mohamed Mohamed Afify and i am a Junior Full-Stack Developer skilled in React.js, Spring Boot, and database integration. Skilled in 
converting system requirements into ERD diagrams, creating physical databases schema, and building 
back-end services to handle user requests. Skilled in developing user interfaces using React JS and Redux 
Toolkit, with a focus on creating dynamic and responsive front-end solutions.
        </p>
        <p>
        
        </p>
        {/* <p>
          That being said, I like learning all aspects of web development and
          take pride in my fullstack work. Because of this, I am always open to
          new projects in new development environments.
        </p> */}
      </div>
      <div>
        <h3 style={{ marginTop: "2rem" }}>Current Skills</h3>
        <div className="skillgrid">
          <div>
            <div className="skillemblem">
              <Html />
            </div>
            <p>HTML5</p>
          </div>
          <div>
            <div className="skillemblem">
              <Css />
            </div>
            <p>CSS3</p>
          </div>
          <div>
            <div className="skillemblem">
              <Js />
            </div>
            <p>JavaScript</p>
          </div>
          <div>
            <div className="skillemblem">
              <Ts />
            </div>
            <p>TypeScript</p>
          </div>
          <div>
            <div className="skillemblem">
              <Node />
            </div>
            <p>NodeJS</p>
          </div>
          <div>
            <div className="skillemblem">
              <Reacti />
            </div>
            <p>React</p>
          </div>
          <div>
            <div className="skillemblem">
              <Fire />
            </div>
            <p>Firebase</p>
          </div>
          <div>
            <div className="skillemblem">
              <Boot />
            </div>
            <p>Bootstrap</p>
          </div>
          <div>
            <div className="skillemblem">
              <Figma />
            </div>
            <p>Figma</p>
          </div>
          <div>
            <div className="skillemblem">
              <Git />
            </div>
            <p>Git</p>
          </div>
          <div>
            <div className="skillemblem">
              <Gulp />
            </div>
            <p>Gulp</p>
          </div>
          <div>
            <div className="skillemblem">
              <Post />
            </div>
            <p>Postgresql</p>
          </div>
        </div>
      </div>
      <div>
        <h3>Programming Directive</h3>
        <p>
        Highly skilled in building scalable and efficient web applications, leveraging React.js for dynamic, user-friendly front-end interfaces and Spring Boot for robust, back-end microservices. Proficient in designing, developing, and integrating RESTful APIs, ensuring seamless communication between systems. Experienced in implementing modern software development practices, including agile methodologies, test-driven development, and CI/CD pipelines. Passionate about delivering clean, maintainable code and creating innovative solutions to complex technical challenges.
        </p>
      </div>
    </div>
  );
};

export default About;
