import React from "react"
import {Modal,Button, Container} from "react-bootstrap"
import{Redirect} from "react-router-dom"
//import {AuthContext}from "../../authContext"
import styled from "styled-components"

const Center=styled.div`
text-align:center;
justify:center;
margin-left:auto;
margin-right:auto;
hr{
    width:200px;
}
`
const LoginButton=styled.button`
padding:5px;
background:orange;
border-radius:5px;
border:none;
width:100px;
`
const Line=styled.div`
display:flex;
flex-direction:row;
text-align:center;
justify-content:center;
hr{
    width:190px;
    
}
`
class Login extends React.Component{
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:"",
            name:null
        }
    }
    handleChange=(e)=>{
        const {name,value}=e.target
        this.setState({
            [name]:value
        })
    }
    handleClick=()=>{

        const {handleAuth}=this.props
        const {email,password}=this.state
        console.log(email,password)
        handleAuth({email,password})
    }
    
    render(){
        console.log(this.props)
        const {isLoading,isAuth,isError}=this.props
        const {email,password}=this.state
        console.log(isError)

    return(
        <>
 
        
        <Modal show={this.props.isOpen} onHide={this.props.closeModal}>
            <Modal.Header closeButton  style={{ borderBottom: "0 none"}}></Modal.Header>
<Center  style={{textAlign:"center"}}>
    
       <h1>
       Namaste!
       </h1>
   
    </Center>
   <Line>
   <hr/>OR<hr/>
   </Line>
    


<Modal.Body>
<Container>

           
            <Center>

            <h4>Login with your email</h4>
            <div style={{padding:"10px"}}>
                <input type="text" 
                placeholder="Enter email"
                 value={email} name="email"
                  onChange={this.handleChange} />
            </div>
            <div style={{padding:"10px"}}>
             <input type="text"
              placeholder="Enter password" 
              value={password} name="password" 
              onChange={this.handleChange} />
            </div>
            {isError? <h5>Please Enter Registered Details</h5>:null}
            <LoginButton onClick={this.handleClick}>Login</LoginButton>
            </Center>
            
            </Container>  
         
<hr style={{width:"400px",marginLeft:"auto",marginRight:"auto"}}/>

</Modal.Body>

<Center>
           <h5>Forgot password? <a href="#">Click Here</a></h5>
            <h5 style={{marginBottom:"25px"}}>Not a member? <a href="#">Register Here</a></h5>
            </Center>
   
        </Modal>
      
       
        </>
    )
}
}

//Login.contextType=AuthContext
export default Login