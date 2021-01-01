import React from "react"
import Data from "./db.json"
export const AuthContext=React.createContext()

class AuthContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isAuth:false,
            isLoading:false,
            isOpen:false,
            isError:false,
            idChange:false,
            name:""
        }
        

    }
   
    openModal = () => this.setState({ isOpen: true });
    closeModal = () => this.setState({ isOpen: false });
   
    handleAuth=({email,password})=>{
        this.setState({
            isLoading:true
        })
        console.log(email + password)
        if(Data.find((item)=>item.username===email && item.password ===password)){
          
          this.setState({
            isLoading:false,
            isAuth:true,
            isError:false,
            idChange:true,
            name:email
            

          })
          console.log(1)
          this.closeModal()
    
            
        }
        else{
            this.setState({
                isLoading:false,
                isError:true,
                idChange:false,
            })
            this.openModal()
            
            
        }
    }
    
    render(){
        const{handleAuth,closeModal,openModal}=this
        const {isAuth,isLoading,isOpen,isError,idChange,name}=this.state
        const value={handleAuth,isLoading,isAuth,isOpen,closeModal,openModal,isError,idChange,name}
        return(
            <AuthContext.Provider value={value}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider