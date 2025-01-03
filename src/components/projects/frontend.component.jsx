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
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Github /&gt;
            </a>
            {/* <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a> */}
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
