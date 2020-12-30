import React from "react";
import Styles from "./Homepage.module.css";

function Justlaunch() {
  return (
    <div className={Styles.Justlaunch}>
      <h2>Just Launched</h2>
      <div className={Styles.borderbottom}></div>
      <div style={{ display: "flex" }}>
        <div className={Styles.Card}>
          <div
            className={Styles.Img}
            style={{
              backgroundImage:
                "url(https://wb-new.s3.ap-south-1.amazonaws.com/campaigns/81384/cover/1604499419872_33808828-1D1B-467B-A189-8785330BF34A.jpeg)",
            }}
          >
            <div className={Styles.modal}>
              <button>QUICK VIEW</button>
              <button>SEE MORE</button>
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <h3>Navarasa</h3>
            <br />
            <p>Nisha Satpute</p>
            <br />
            <p>
              Navarasa is a music album of nine ghazals, composed in different
              genres and languages with a common aim to evoke a specific emotion
              pertaining to the Rasa.
            </p>
            <button>Music</button>
            <div style={{ display: "flex" }}>
              <h4>
                32% <br />
                Pledged{" "}
              </h4>
              <h4>
                ₹ 2,07,661
                <br />
                Pledged{" "}
              </h4>
              <h4>
                28
                <br />
                Days left{" "}
              </h4>
            </div>
          </div>
        </div>
        <div className={Styles.Card}>
          <div
            className={Styles.Img}
            style={{
              backgroundImage:
                "url(https://wb-new.s3.ap-south-1.amazonaws.com/campaigns/81093/cover/1593374282627_Home.jpg)",
            }}
          >
            <div className={Styles.modal}>
              <button>QUICK VIEW</button>
              <button>SEE MORE</button>
            </div>
          </div>
          <div style={{ padding: "20px" }}>
            <h3>Forest Archives - A Coffee Table Book</h3>
            <br />
            <p>Lokesh Dodla</p>
            <br />
            <p>
              Forest Archives is a fine art coffee table book showcasing some of
              the most evocative and beautiful moments, from wildlife reserves
              and sanctuaries of India.
            </p>
            <button>Photography</button>
            <div style={{ display: "flex" }}>
              <h4>
                2% <br />
                Pledged{" "}
              </h4>
              <h4>
                ₹ 3,349
                <br />
                Pledged{" "}
              </h4>
              <h4>
                3<br />
                Days left{" "}
              </h4>
            </div>
          </div>
        </div>
      </div>
      <button className={Styles.Seemore}>SEE MORE</button>
    </div>
  );
}
export default Justlaunch;
