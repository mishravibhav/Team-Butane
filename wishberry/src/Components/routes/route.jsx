import React from 'react'
import{Route,Switch} from "react-router-dom"
import Navbar from "../pages/navbar"


import Working from "../pages/work"


const Routing =()=>{
    return(
        <div>
            <div>
            <Navbar/>
            </div>
          
         
            <Switch>
                <Route exact path="/how-it-works" render={()=><Working/>}  />
 
                
            </Switch>
            
        </div>
    )
}
export default Routing