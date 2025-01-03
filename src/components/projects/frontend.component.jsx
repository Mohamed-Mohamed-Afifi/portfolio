import React, { useState } from "react";
import Modal from "simple-react-modal";
import Video from "../video/video.component";
import vsportfolio from "../../assets/vsportfolio.png";
import calloutsevolved from "../../assets/calloutsevolved.png";
import langsynth from "../../assets/langsynth.png";
import Silo from "../../assets/silo.jpg";

const Frontend = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);

  return (
      <>
      <div className="gridlayout1">
        <div>
          <img src={Silo} alt="Menouf silo" />
        </div>
        <div>
          <h3>Management System for Silo Company</h3>
          <p>
          Software management system for egyptian holding company for silos storage in menouf
          </p>
          <b>What problem it solves</b>
          <p>
 Developed responsive web services for warehouse operations, enabling real-time crop tracking, 
workflow optimization, and efficient distribution, enhancing overall operational efficiency.
          </p>
          <b>Features</b>
          <p>"Achieved 98/100 performance, saved 86% process time in silo, and reduced redundancy by 90%."</p>
          <br />
          <div className="gridlayout2">
            <a
              href="https://github.com/Mohamed-Mohamed-Afifi/mill-project"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Github /&gt;
            </a>
            <a
              href="https://www.figma.com/proto/2PPc8u7JWC8tRmk9loiXln/%D8%B5%D9%88%D8%A7%D9%85%D8%B9-%D9%85%D9%86%D9%88%D9%81?node-id=820-10411&p=f&t=A86ZMnPEgNDc2ete-1&scaling=min-zoom&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=820%3A10411"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live view /&gt;
            </a>
          </div>
          <Modal
            className="projectModal"
            containerClassName="projectModel__inner"
            closeOnOuterClick={true}
            show={modal1}
            onClose={() => setModal1(!modal1)}
          >
          </Modal>
        </div>
      </div>
    </>
  );
};

export default Frontend;
