import React from "react";
import Styles from "./Homepage.module.css";

function Curated() {
  return (
    <div
      style={{
        paddingTop: "60px",
        marginTop: "50px",
        backgroundColor: "#ecf0f1",
      }}
    >
      <h2>Curated Content</h2>
      <div className={Styles.borderbottom}></div>
      <div className={Styles.Curated}>
        <div
          className={Styles.Content}
          style={{
            backgroundImage:
              "url(https://www.wishberry.in/img/curated/nid.png)",
          }}
        >
          <div className={Styles.Contenteffect}>
            <p>Click to know more</p>
          </div>
        </div>
        <div
          className={Styles.Content}
          style={{
            backgroundImage:
              "url(https://www.wishberry.in/img/curated/the-goa-project.png)",
          }}
        >
          <div className={Styles.Contenteffect}>
            <p>Click to know more</p>
          </div>
        </div>
        <div
          className={Styles.Content}
          style={{
            backgroundImage:
              "url(https://www.wishberry.in/img/curated/rolling-stone-logo.png)",
          }}
        >
          <div className={Styles.Contenteffect}>
            <p>Click to know more</p>
          </div>
        </div>
        <div
          className={Styles.Content}
          style={{
            backgroundImage:
              "url(https://wb-new.s3.ap-south-1.amazonaws.com/img/curated/WB_MUBI-Curated.png)",
          }}
        >
          <div className={Styles.Contenteffect}>
            <p>Click to know more</p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Curated;
