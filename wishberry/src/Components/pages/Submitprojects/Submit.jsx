import React from 'react'
import NavBar from '../../pages/navbar'
import './submit.css'

const Submit = ()=>{
    return(
        <div>
            <NavBar/>
            <div className="content">
                <h1 className="h-1">Important notice</h1>

                <div className="para">
                    Dear All,
                    <br/>
                    <br/>
                    2020 has been a tumultuous year and the uncertainty it brought forth has crept into all aspects of life – especially in the creative arts.
                    In spite of these headwinds, we at Wishberry have navigated these testing times and are excited to see the new hope that the new year will bring us.
                     We’re taking the year-end to introspect and spend time on self-care, while working on ways to better help our creators.
                      The world needs creators more than ever before and we understand the need to adapt in order to better serve this market.
                       We will take all of you into our confidence in due time and announce the next phase of our journey soon.
                     Until then, stay safe and stay healthy.
                     <br/>
                     <br/>
                     Best
                     <br/>
                     <br/>
                     Team Wishberry
                </div>
                <div>
                    <button className="btn">BACK TO HOME</button>
                </div>
            </div>
        </div>
    )
}

export default Submit