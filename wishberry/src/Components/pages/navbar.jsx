
import React from 'react'

import {NavLink,Link} from "react-router-dom"
import styled from "styled-components";
import {Dropdown} from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css'

class Navbar extends React.Component{
constructor(props){
    super(props)
   
    this.state={
      
    }
  }
  

render(){



    return(
        <div>
           
          
                <Link to="/">
                    <img style={{height:"60px" ,width:"auto", float:"left" , marginLeft:"30px"}} src="/wishberry.png"
                    alt="Wishberry"/></Link>    
                    
                    
                    <Dropdown style={{marginLeft:"45%",background:"none",}}>
  <Dropdown.Toggle variant="light">
    Browser Projects
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item eventKey="1">
                    <NavLink to="/current-projects" style={{padding:"10px",textDecoration:"none",color:"#303030"}} activeStyle={{fontWeight:"bold",color:"black",}}>Current Projects</NavLink></Dropdown.Item>
    <Dropdown.Divider />

    <Dropdown.Item eventKey="2">
    <NavLink to="/sucessful-projects" style={{padding:"10px",textDecoration:"none",color:"#303030"}} activeStyle={{fontWeight:"bold",color:"black",}}>Sucessful Projects</NavLink>

    </Dropdown.Item>
    <Dropdown.Divider />

  </Dropdown.Menu>
    
    <NavLink to="/submit-projects"  style={{padding:"10px",textDecoration:"none",color:"#303030"}} activeStyle={{fontWeight:"bold",color:"black",}}>Submit Projects</NavLink>

    <NavLink to="/how-it-works"  style={{padding:"10px",textDecoration:"none",color:"#303030"}} activeStyle={{fontWeight:"bold",color:"black",}}>How It Works</NavLink>

    <NavLink to="/login-register"  style={{padding:"10px",textDecoration:"none",color:"#303030",paddingTop:"100px"}} activeStyle={{fontWeight:"bold",color:"black",}}>Login/Register</NavLink>

</Dropdown>

                   
    <hr style={{marginTop:"22px"}}/>

  </div>
    )

}

}
export default Navbar