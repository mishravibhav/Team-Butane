import React from "react";
import Styles from "./Homepage.module.css";
import Cardinfo from "./Card.json";
import Card from "../Successpage/Card.jsx";
import Successstyle from "../Successpage/Success.module.css"
function Justlaunch() {
  return (
    <div>
      <div className={Styles.Justlaunch}>
        <h2>Just Launched</h2>
        <div className={Styles.borderbottom}></div>
      </div>
      <div className={Successstyle.grid}>
        {Cardinfo.map((item) => {
          return <Card key={item.id} item={item} />;
        })}
      </div>

      <button className={Styles.Seemore}>SEE MORE</button>
    </div>
  );
}
export default Justlaunch;
