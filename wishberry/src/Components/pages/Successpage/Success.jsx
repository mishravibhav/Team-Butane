import React from "react";
import Styles from "../Homepage/Homepage.module.css";
import Successstyle from "./Success.module.css";
import Downarrow from "../../Svgs/chevron-down-solid.svg";
import Palette from "../../Svgs/palette-solid.svg";
import Bulb from "../../Svgs/lightbulb-regular.svg";
import Dance from "../../Svgs/glass-cheers-solid.svg";
import Design from "../../Svgs/pencil-ruler-solid.svg";
import Film from  "../../Svgs/film-solid.svg";
import Music from "../../Svgs/music-solid.svg";
import Camera from "../../Svgs/camera-solid.svg";
import Publish from "../../Svgs/print-solid.svg";
import Theatre from "../../Svgs/theater-masks-solid.svg";
import Card from "./Card.jsx";
import Cardinfo from "./Card.json";

class Success extends React.Component {
  scroll=()=>{
    window.scrollTo({
      top:560,
    })
  }

  render() {
    console.log(Cardinfo)
    return (
     <div style={{marginBottom:"1600px"}}>
        <div
         className={Styles.Homepagehero}
          style={{
            backgroundImage:
              "url(https://s3.ap-south-1.amazonaws.com/wb-new/success-cover-new.jpg)",
            backgroundPosition:"center"
          }}
        >
          <div style={{textShadow:"1px 1px 1px black"}}>
        <h1 style={{marginTop:"100px",}}>SUCCESS STORIES</h1>
          <h5>
          From India's first animated Sanskrit film to a slightly twisted party game,
          </h5>
          <h5>take a look at all of our successfully crowdfunded projects!</h5>
         
          <div className={Styles.Learnmore}>
            <p  onClick={this.scroll} >Explore</p>
            <img  onClick={this.scroll}  style={{ height: "15px" }} src={Downarrow} alt="down arrow" />
          </div> 
          </div>
        <div className={Successstyle.middiv}>
        <div className={Successstyle.explore}>
            <div>
            <img src={Palette} alt="palette" />
         <p>Art</p>
            </div>
            <div>
            <img src={Bulb} alt="palette" />
            <p>Comic</p>
            </div>
            <div>
            <img src={Dance} alt="palette" />
            <p>Dance</p>
            </div>
            <div>
            <img src={Design} alt="palette" />
            <p>Design</p>
            </div>
            <div>
            <img src={Film} alt="palette" />
            <p>Film</p>
            </div>
            <div>
            <img src={Music} alt="palette" />
            <p>Music</p>
            </div>
            <div>
            <img src={Camera} alt="palette" />
            <p>Photography</p>
            </div>
            <div>
            <img src={Publish} alt="palette" />
            <p>Publishing</p>
            </div>
            <div>
            <img src={Theatre} alt="palette" />
            <p>Theatre</p>
            </div>
        </div>
        <input type="search" />
        </div>
      <div className={Successstyle.grid}>
          {
              Cardinfo.map((item)=>{
                  return <Card key={item.id} item={item}/>
              })
          }
      </div>
      </div>
      </div>
    );
  }
}

export default Success;
