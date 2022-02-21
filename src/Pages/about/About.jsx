import React from "react";
import CEO from "../../img/CEO.png";
import BusinessBG from "../../img/BusinessBG.png";

import "./about.scss";
function About() {
  return (
    <div id="about" className="about">
      <div className="aboutContainer">
        <div className="aboutCompany">
          <div className="aboutCompanyInfo">
            <h2>ABOUT COMPANY</h2>

            <p>
              Business Promoz is engaged in promoting and gathering leads for
              your products and services by customizing and prioritizing yours
              with quality delivery. We work with experienced and trained
              professionals.
            </p>
            <p>
              The results that we deliver have been disseminated through various
              media globally. We help resolve your problems and the best
              possible solutions.
            </p>
          </div>
          <div className="aboutCompanyImg">
            <img src={BusinessBG} alt="" />
          </div>
        </div>
        <div className="aboutCeo">
          <div className="ceo">
            <img className="CeoImg" src={CEO} alt="" />
            <div className="ceoName">
              <h3>Upal Chakraborty</h3>
              <p>Founder & CEO</p>
            </div>
          </div>
          <div className="desc">
            <h2 className="h2">ABOUT UPAL</h2>
            <p>
              He is a Content Creator and a Digital Coach possessing expertise
              in SEO with experience of more than 18 years and has the ability
              to make a difference in the crowd. As a marketing expert, he has
              led various famous and successful campaign projects..
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
