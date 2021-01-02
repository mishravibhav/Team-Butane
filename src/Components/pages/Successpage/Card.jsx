import React from "react"
import Styles from "../Homepage/Homepage.module.css";

function Card({item}){
    return(
        <div className={Styles.Justlaunch}>
        <div style={{ display: "flex" }}>
          <div className={Styles.Card}>
            <div
              className={Styles.Img}
              style={{
                backgroundImage:
                  `url(${item.url})`,
              }}
            >
              <div className={Styles.modal}>
                <button>QUICK VIEW</button>
                <button>SEE MORE</button>
              </div>
            </div>
            <div style={{ padding: "20px" }}>
              <h3>{item.title}</h3>
              <br />
              <p>{item.subtitle}</p>
              <br />
              <p>
               {item.info}
              </p>
              <button>{item.type}</button>
              <div style={{ display: "flex" }}>
                <h5>
                  32% <br />
                  Pledged{" "}
                </h5>
                <h5>
                  ₹ 2,07,661
                  <br />
                  Pledged{" "}
                </h5>
                <h5>
                  28
                  <br />
                  Days left{" "}
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}
export default Card