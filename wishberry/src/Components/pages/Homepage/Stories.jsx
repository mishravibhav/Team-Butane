import React from "react";
import Styles from "./Homepage.module.css";

function Stories() {
  return (
    <div>
      <h2>Our Success Stories</h2>
      <div className={Styles.borderbottom}></div>
      <div className={Styles.Storybox}>
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
              brings together unheard human stories from all of India's borders.
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
              Rama, a housewife befriends a live 200-year-old, gigantic Sperm
              Whale, Mushi.
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
              The last left death photographer of Manikarnika ghat in Varanasi
              finds himself stuck in time bubble like the town itself!
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
  );
}
export default Stories;
