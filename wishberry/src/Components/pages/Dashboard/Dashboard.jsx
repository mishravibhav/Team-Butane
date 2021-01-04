import React from "react";
import Styles from "../Homepage/Homepage.module.css";
import Dashboardstyles from "./Dashboard.module.css";
import Footer from "../Footer/footer"
class Myprofile extends React.Component {
  constructor(props) {
    super(props);
    this.state={
        campaigns:"block",
        pledges:"none",
        messages:"none",
        settings:"none",
        profile:"https://cdn.business2community.com/wp-content/uploads/2017/08/blank-profile-picture-973460_640.png"
    }
  }
divshow=(e)=>{
    const {name}=e.target;
    if(name==="campaigns"){
        this.setState({
            [name]:"block",
            pledges:"none",
            messages:"none",
            settings:"none",
        })
    }
    if(name==="pledges"){
        this.setState({
            [name]:"block",
            campaigns:"none",
            messages:"none",
            settings:"none",
        })
    }
    if(name==="messages"){
      this.setState({
        [name]:"block",
        campaigns:"none",
        pledges:"none",
        settings:"none",
      })
    }
    if(name==="settings"){
        this.setState({
          [name]:"block",
          campaigns:"none",
          pledges:"none",
          messages:"none",
        })
      }
    
}
profile=(e)=>{
   this.setState({
       profile:e.target.value
   })
   console.log(e.target.value)
}
  render() {
    return (
      <div>
      <div style={{margin:"150px 220px", justifyContent: "center" }}>
        <h3>My Profile</h3>
        <div className={Styles.borderbottom}></div>

        <div className={Dashboardstyles.Maindiv}>
          <div className={Dashboardstyles.options}>
            <button name="campaigns" onClick={this.divshow}>My Campaigns</button>
            <button  name="pledges" onClick={this.divshow}>My Pledges</button>
            <button name="messages" onClick={this.divshow}>My Messages</button>
            <button name="settings" onClick={this.divshow}>My Settings</button>
          </div>
          <div className={Dashboardstyles.optionDetail}>
             <div className={Dashboardstyles.Campaigns} style={{display:`${this.state.campaigns}`}}>
               {this.props.item?<ul>{this.props.item.map((item)=>{return <li>{item}</li>})}</ul>:<h5>No Campaigns Found...</h5>}
              </div>
              <div className={Dashboardstyles.Pledges}  style={{display:`${this.state.pledges}`}}>
              {this.props.item?<ul>{this.props.item.map((item)=>{return <li>{item}</li>})}</ul>:<h5>No Pledges Found...</h5>}
              </div>
              <div className={Dashboardstyles.Messages} style={{display:`${this.state.messages}`}}>
               {this.props.item?<ul>{this.props.item.map((item)=>{return <li>{item}</li>})}</ul>:<h5>No Messages...</h5>}
              </div>
              <div className={Dashboardstyles.Messages} style={{display:`${this.state.settings}`, margin: "40px"}}>
               {this.props.item?<ul>{this.props.item.map((item)=>{return <li>{item}</li>})}</ul>:<h5>Settings</h5>}
               <div style={{backgroundImage:`url(${this.state.profile})`}} className={Dashboardstyles.Profile}>
                   <input type="file" onChange={this.profile} />
               </div>
               <div className={Dashboardstyles.Profiledetail}>
                   <label>Name<span>*</span></label>
                   <input type="text"placeholder="Name" />
                   <label>Email ID<span>*</span></label>
                   <input type="text"placeholder="Email ID" />
               </div>
              </div>
          </div>
        </div>
      </div>
        {/* <Footer/> */}
      </div>
    );
  }
}

export default Myprofile;
