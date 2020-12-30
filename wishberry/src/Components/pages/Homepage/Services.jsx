import React from "react";
import Styles from "./Homepage.module.css";
import Sliders from "../../Svgs/sliders-h-solid.svg";
import Chart from "../../Svgs/chart-bar-regular.svg";
import Envelope from "../../Svgs/envelope-regular.svg"

function Services() {
  return (
    <div style={{ backgroundColor: "#ecf0f1", padding: "60px 0px" }}>
      <h2>Why Wishberry?</h2>
      <div className={Styles.borderbottom}></div>
      <p style={{ fontSize: "20px", marginTop: "20px" }}>
        We are not just a DIY platform. We also provide the following services:
      </p>
      <div className={Styles.Services}>
        <div>
          <img src={Sliders} alt="sliders" />
          <h5>MARKETING STRATEGY</h5>
        </div>
        <div>
          <img src={Chart} alt="Chart" />
          <h5>PERSONAL CAMPAIGN CONSULTATION</h5>
        </div>
        <div>
          <img src={Envelope} alt="Envelope" />
          <h5>SOCIAL MEDIA & PR</h5>
        </div>
      </div>
      <div className={Styles.Middiv}>
        <div className={Styles.Circle}>
          <h1>70%</h1>
          <h4>Success rate</h4>
        </div>
        <div className={Styles.Midinfo}>
          <div>
            <h2>
              <span className={Styles.Right}>✔</span>500 PROJECTS
            </h2>
          </div>
          <div>
            <h2>
              <span className={Styles.Right}>✔</span>₹ 17 CRORES RAISED
            </h2>
          </div>
          <div>
            <h2>
              <span className={Styles.Right}>✔</span>1,00,000 BACKERS
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Services;
