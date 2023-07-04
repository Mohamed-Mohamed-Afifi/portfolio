import React, { useState } from "react";
import Modal from "simple-react-modal";
import Video from "../video/video.component";
import epdisplate from "../../assets/epdisplate.png";
import eplinkedin from "../../assets/eplinkedin.png";
import epsoylent from "../../assets/epsoylent.png";
import epwalmart from "../../assets/epwalmart.png";

const Emails = () => {
  const [modal1, setModal1] = useState(false);
  const [modal2, setModal2] = useState(false);
  const [modal3, setModal3] = useState(false);
  const [modal4, setModal4] = useState(false);

  return (
    <>
      <div className="gridlayout1">
        <div>
          <img
            src="https://img.freepik.com/free-vector/gradient-world-water-day-landing-page-template_23-2149253987.jpg"
            alt="Preview of HTML email from LinkedIn."
          />
        </div>
        <div>
          <h3>Atomic Landing Page</h3>
          <p>
            The heart of this landing page lies in the showcase of my work. With
            interactive galleries and captivating slideshows, you'll witness my
            projects come to life through seamless animations and transitions.
            Hover effects and click interactions provide deeper insights into
            each project, allowing you to delve into the intricate details and
            understand the impact of my work.
          </p>
          <b>What problem it solves</b>
          <p>
            I rebuilt this example as it helps guides the customer through a
            sales funnel. In doing so, I learned more about
          </p>
          <b>Features</b>
          <p>Lightweight and Compact</p>
          <p>Insulation and Temperature Regulation</p>
          <br />
          <div className="gridlayout2">
            <a
              href="https://github.com/Mohamed-Mohamed-Afifi/Atomic-Landing-page"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
            <a
              href="https://sweet-sfogliatella-147cd2.netlify.app/#screenshot"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Demo /&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="gridlayout3">
        <div>
          <h3>Cube Landing Page</h3>
          <p>
            The heart of this landing page lies in the showcase of my work. With
            interactive galleries and captivating slideshows, you'll witness my
            projects come to life through seamless animations and transitions.
            Hover effects and click interactions provide deeper insights into
            each project, allowing you to delve into the intricate details and
            understand the impact of my work.
          </p>
          <b>What problem it solves</b>
          <p>
            I rebuilt this example as it helps guides the customer through a
            sales funnel. In doing so, I learned more about
          </p>
          <b>Features</b>
          <p>Lightweight and Compact</p>
          <p>Insulation and Temperature Regulation</p>
          <br />
          <div className="gridlayout2">
            <a
              href="https://github.com/Mohamed-Mohamed-Afifi/Dark-mode"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
            <a
              href="https://bespoke-bonbon-c5d6c2.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Demo /&gt;
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://cruip.com/wp-content/uploads/edd/2022/08/cube-3.png"
            alt="Preview of HTML email from Displate."
          />
        </div>
      </div>
      <div className="gridlayout1">
        <div>
          <img
            src="https://cdn.dribbble.com/users/6828964/screenshots/15392335/artist_final_final.png"
            alt="Preview of HTML email from Walmart."
          />
        </div>
        <div>
          <h3>Studio Landing Page</h3>
          <p>
            The heart of this landing page lies in the showcase of my work. With
            interactive galleries and captivating slideshows, you'll witness my
            projects come to life through seamless animations and transitions.
            Hover effects and click interactions provide deeper insights into
            each project, allowing you to delve into the intricate details and
            understand the impact of my work.
          </p>
          <b>What problem it solves</b>
          <p>
            I rebuilt this example as it helps guides the customer through a
            sales funnel. In doing so, I learned more about
          </p>
          <b>Features</b>
          <p>Lightweight and Compact</p>
          <p>Insulation and Temperature Regulation</p>
          <br />
          <div className="gridlayout2">
            <a
              href="https://github.com/Mohamed-Mohamed-Afifi/Gallery-landing-page-2019-"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
            <a
              href="https://relaxed-gnome-5d76b6.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Demo /&gt;
            </a>
          </div>
        </div>
      </div>
      <div className="gridlayout3">
        <div>
          <h3>Avatar Landing page</h3>
          <p>
            The heart of this landing page lies in the showcase of my work. With
            interactive galleries and captivating slideshows, you'll witness my
            projects come to life through seamless animations and transitions.
            Hover effects and click interactions provide deeper insights into
            each project, allowing you to delve into the intricate details and
            understand the impact of my work.
          </p>
          <b>What problem it solves</b>
          <p>
            I rebuilt this example as it helps guides the customer through a
            sales funnel. In doing so, I learned more about
          </p>
          <b>Features</b>
          <p>Lightweight and Compact</p>
          <p>Insulation and Temperature Regulation</p>
          <br />
          <div className="gridlayout2">
            <a
              href="https://github.com/Mohamed-Mohamed-Afifi/Avatar-2019"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Code /&gt;
            </a>
            <a
              href="https://frabjous-smakager-3690da.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              &lt; Live Demo /&gt;
            </a>
          </div>
        </div>
        <div>
          <img
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/5e987b16742005.562cac4c230e3.png"
            alt="Preview of HTML email from Soylent."
          />
        </div>
      </div>
    </>
  );
};

export default Emails;
