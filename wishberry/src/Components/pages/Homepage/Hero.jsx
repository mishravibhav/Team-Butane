import React from "react";
import Styles from "./Homepage.module.css";
import Downarrow from "../../Svgs/chevron-down-solid.svg";

function Hero() {
  return (
    <div className={Styles.Homepagehero}>
      <h1>WISHBERRY,</h1>
      <h1>STRICTLY CREATIVE</h1>
      <h5>
        Wishberry, India’s most successful crowdfunding platform for creative
        artists,
      </h5>
      <h4>is on a mission to empower creativity in India.</h4>
      <button>SUBMIT PROJECT</button>
      <button>BROWSE PROJECTS</button>
      <div className={Styles.Learnmore}>
        <p>Learn more</p>
        <img style={{ height: "15px" }} src={Downarrow} alt="down arrow" />
      </div>
    </div>
  );
}
export default Hero;
