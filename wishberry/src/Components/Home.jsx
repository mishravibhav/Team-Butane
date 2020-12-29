import React from "react";
import Downarrow from "../Svgs/chevron-down-solid.svg";
import Sliders from "../Svgs/sliders-h-solid.svg";
import Chart from "../Svgs/chart-bar-regular.svg";
import Envelope from "../Svgs/envelope-regular.svg";
import Styles from "./Homepage.module.css";

class Home extends React.Component {
  //   constructor(props) {
  //     super(props);
  //   }

  render() {
    return (
      <div>
        <div className={Styles.Homepagehero}>
          <h1>WISHBERRY,</h1>
          <h1>STRICTLY CREATIVE</h1>
          <h4>
            Wishberry, India’s most successful crowdfunding platform for
            creative artists,
          </h4>
          <h4>is on a mission to empower creativity in India.</h4>
          <button>SUBMIT PROJECT</button>
          <button>BROWSE PROJECTS</button>
          <div className={Styles.Learnmore}>
            <p>Learn more</p>
            <img style={{ height: "15px" }} src={Downarrow} alt="down arrow" />
          </div>
        </div>
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
                  Navarasa is a music album of nine ghazals, composed in
                  different genres and languages with a common aim to evoke a
                  specific emotion pertaining to the Rasa.
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
                  Forest Archives is a fine art coffee table book showcasing
                  some of the most evocative and beautiful moments, from
                  wildlife reserves and sanctuaries of India.
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
        <div style={{ backgroundColor: "#ecf0f1", paddingTop: "60px" }}>
          <h2>Why Wishberry?</h2>
          <div className={Styles.borderbottom}></div>
          <p style={{ fontSize: "20px", marginTop: "20px" }}>
            We are not just a DIY platform. We also provide the following
            services:
          </p>
          <div className={Styles.Services}>
            <div>
              <img src={Sliders} alt="sliders" />
              <h3>MARKETING STRATEGY</h3>
            </div>
            <div>
              <img src={Chart} alt="Chart" />
              <h3>PERSONAL CAMPAIGN CONSULTATION</h3>
            </div>
            <div>
              <img src={Envelope} alt="Envelope" />
              <h3>SOCIAL MEDIA & PR</h3>
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
        <div>
          <h2>Our Success Stories</h2>
          <div className={Styles.borderbottom}></div>
          <div style={{ display: "flex" }}>
            <div
              className={Styles.Story}
              style={{
                backgroundImage:
                  "url(https://s3.ap-south-1.amazonaws.com/wb-new/success-stories/The_borderlands.jpg)",
              }}
            >
              <div className={Styles.StoryTitle}>
                <h3>The Borderlands</h3>
              </div>
              <div className={Styles.StoryDetail}>
                <h3>The Borderlands</h3>
                <br />
                <br />
                <p>
                  The team of the National award-winning film 'The Unreserved'
                  brings together unheard human stories from all of India's
                  borders.
                </p>
                <br />
                <h3>
                  Amount Raised: ₹ 29,84,713
                  <br />
                  Number of Backers: 557
                </h3>
                <br />
                <br />
                <p>Click to view more</p>
              </div>
            </div>
            <div
              className={Styles.Story}
              style={{
                backgroundImage:
                  "url(https://s3.ap-south-1.amazonaws.com/wb-new/success-stories/Kitchen_the_world_within.jpg)",
              }}
            >
              <div className={Styles.StoryTitle}>
                <h3>Kitchen-The World Within</h3>
              </div>
              <div className={Styles.StoryDetail}>
                <h3>Kitchen-The World Within</h3>
                <br />
                <br />
                <p>
                  Rama, a housewife befriends a live 200-year-old, gigantic
                  Sperm Whale, Mushi.
                </p>
                <br />
                <h3>
                  Amount Raised: ₹ 13,35,300
                  <br />
                  Number of Backers: 344
                </h3>
                <br />
                <br />
                <p>Click to view more</p>
              </div>
            </div>
            <div
              className={Styles.Story}
              style={{
                backgroundImage:
                  "url(https://s3.ap-south-1.amazonaws.com/wb-new/success-stories/Barah_by_Barah.jpg)",
              }}
            >
              <div className={Styles.StoryTitle}>
                <h3>Barah by Barah</h3>
              </div>
              <div className={Styles.StoryDetail}>
                <h3>Barah by Barah</h3>
                <br />
                <br />
                <p>
                  The last left death photographer of Manikarnika ghat in
                  Varanasi finds himself stuck in time bubble like the town
                  itself!
                </p>
                <br />
                <h3>
                  Amount Raised: ₹ 10,17,470
                  <br />
                  Number of Backers: 96
                </h3>
                <br />
                <br />
                <p>Click to view more</p>
              </div>
            </div>
          </div>
          <button className={Styles.Seemore}>SEE MORE</button>
        </div>
      </div>
    );
  }
}
export default Home;
