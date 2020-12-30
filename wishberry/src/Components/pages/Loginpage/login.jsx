import React from "react"
import {Modal,Button} from "react-bootstrap"
import{Redirect} from "react-router-dom"
import {AuthContext}from "../../authContext"
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
        const {handleAuth}=this.context
        const {email,password}=this.state
        handleAuth({email,password})
    }
    
    render(){
        console.log(this.props)
        const {isLoading,isAuth}=this.context
        const {email,password}=this.state

    return(
        <>
  
        
        <Modal show={this.props.isOpen} onHide={this.props.closeModal}>
            <Modal.Header closeButton>
<Modal.Title>Login</Modal.Title>
            </Modal.Header>

<Modal.Body>
   {!isAuth ?
<div>
                <input type="text" 
                placeholder="Enter email"
                 value={email} name="email"
                  onChange={this.handleChange} />
           
             <div>
             <input type="text"
              placeholder="Enter password" 
              value={password} name="password" 
              onChange={this.handleChange} />
         </div>
         <button onClick={this.handleClick}>Login</button>
         </div>:<Redirect to="/how-it-works" />}

</Modal.Body>
<Modal.Footer>
    <Button varient="danger" onclick={this.props.handleModalOpen}>Cancle</Button>
</Modal.Footer>

        
   
        </Modal>
      
      
        </>
    )
}
}

Login.contextType=AuthContext
export default Login