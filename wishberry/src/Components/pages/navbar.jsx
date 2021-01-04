import React from "react";

import { NavLink, Link , Redirect} from "react-router-dom";
import styled from "styled-components";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./Loginpage/login"
import {AuthContext}from "../authContext"
class Navbar extends React.Component {
  constructor(props) {
    super(props);
   

    this.state = {
      background:"transparent",
      color:"white",
      logo:"transparent"
    };
  }
Scroll=()=>{
  this.setState({
    background:"white",
    color:"black",
    logo:" #ff4200"
  })
  
}
componentDidMount(){
  window.addEventListener("scroll",this.Scroll)
}
//openModal = () => this.setState({ isOpen: true });
//closeModal = () => this.setState({ isOpen: false });

  render() {
    console.log(this.context)
    const{ isOpen,closeModal,openModal,isAuth,isLoading,handleAuth,isError,idChange,name}=this.context
    console.log(name)
    return (
      <div  style={{backgroundColor:`${this.state.background}`,position:"fixed",top:"0",width:"100%",padding:"5px"}}>
        <Link to="/">
          <img
            style={{
              height: "60px",
              width: "auto",
              float: "left",
              margin:"0px",
              padding:"0px",
              backgroundColor:`${this.state.logo}`
            }}
            src="data:image/png;base64,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"
            alt="Wishberry"
          />
        </Link>

        <Dropdown style={{ marginLeft: "50%" }}>
          <Dropdown.Toggle variant="none" style={{background: "none" ,outline:"none",border:"none" }}>Browser Projects</Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item eventKey="1">
              <NavLink
                to="/current-projects"
                style={{
                  padding: "5px",
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{ fontWeight: "bold", color: "black" }}
              >
                Current Projects
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Divider />

            <Dropdown.Item eventKey="2">
              <NavLink
                to="/sucessful-projects"
                style={{
                  padding: "5px",
                  textDecoration: "none",
                  color: "black",
                }}
                activeStyle={{ fontWeight: "bold", color: "black" }}
              >
                Sucessful Projects
              </NavLink>
            </Dropdown.Item>
            <Dropdown.Divider />
          </Dropdown.Menu>

          <NavLink
            to="/submit-projects"
            style={{
              padding: "10px",
              textDecoration: "none",
              color: `${this.state.color}`,
            }}
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
            Submit Projects
          </NavLink>

          <NavLink
            to="/how-it-works"
            style={{
              padding: "10px",
              textDecoration: "none",
              color:`${this.state.color}`,
            }}
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
            How It Works
          </NavLink>

          <NavLink

            
            to="/Login-register"
            style={{
              padding: "0px",
              textDecoration: "none",
              color: `${this.state.color}`,
            
            }}
            activeStyle={{ fontWeight: "bold", color: "black" }}
            
           
      
          >
            {idChange ?    
        <div style={{padding:"0px"}}>

        <NavLink
            to="/dashboard"
            style={{
              float:"right",
              textDecoration: "none",
              marginTop:"0px",
              marginRight:"25px",
              color:`${this.state.color}`,
            }}
            activeStyle={{ fontWeight: "bold", color: "black" }}
          >
            <div>
              <img src="https://www.flaticon.com/svg/static/icons/svg/847/847969.svg" style={{marginRight:"10px"}}alt=""/>
            {name}
            </div>
         
          </NavLink>
          <Redirect to ="/dashboard" />
        </div>
        
        
           :
            
            <a  onClick={openModal}>
            Login/Register
            </a>}
            
      
            
       </NavLink>
        </Dropdown>

        {/* <hr  /> */}
        
        {isOpen ? 
          <Login
            closeModal={closeModal} 
            isOpen={isOpen} 
            handleAuth={handleAuth}
            isAuth={isAuth}
            isLoading={isLoading}
            isError={isError}
          /> 
          : null
          
        }

      </div>
    );
  }
}
Navbar.contextType=AuthContext
export default Navbar;
