import React from "react"

export const AuthContext=React.createContext()

class AuthContextProvider extends React.Component{
    constructor(props){
        super(props)
        this.state={
            isAuth:false,
            isLoading:false,
        }
        

    }
   
  
   
    handleAuth=({email,password})=>{
        this.setState({
            isLoading:true
        })
        if(email==="admin" && password==="admin"){
          this.setState({
            isLoading:false,
            isAuth:true

          })
            
        }else{
            this.setState({
                isLoading:false
            })
            
        }
    }
    
    render(){
        const{handleAuth}=this
        const {isAuth,isLoading}=this.state
        const value={handleAuth,isLoading,isAuth}
        return(
            <AuthContext.Provider value={value}>
                {this.props.children}
            </AuthContext.Provider>
        )
    }
}

export default AuthContextProvider