import React from 'react'
import {Link} from 'react-router-dom'
import './Footer.css'


const Footer = ()=>{
    return(
        <div>
            <div style={{textAlign:"left",height:"400px",color:"white"}}>
                <div style={{textAlign:"left",height:"80px",background:"Aqua"}}>
                    <div class="col-4" style={{float:"left"}}>
                        <img style={{height:"50px",width:"auto",float:"left",margin:"10px"}} src="https://p7.hiclipart.com/preview/836/833/124/flag-of-india-computer-icons-national-flag-indian-flag.jpg" alt=""/>
                        <p style={{float:"left",margin:"20px"}}>Made In India</p>
                    </div>
                    <div class="col-4" style={{float:"left"}}>
                        <i style={{padding:"15px"}} class="fab fa-3x fa-facebook"></i>
                        <i style={{padding:"15px"}} class="fab fa-3x fa-instagram-square"></i>
                        <i style={{padding:"15px"}} class="fab fa-3x fa-twitter-square"></i>
                        <i style={{padding:"15px"}} class="fab fa-3x fa-youtube-square"></i>
                    </div>
                    <div class="col-4" style={{float:"left"}}>
                        <input type="text" placeholder="Subscribe to Our NewsLetter" style={{width:"300px",padding:"10px",marginTop:"20px"}}/>
                        <button style={{background:"yellow",color:"white", border:"none",padding:"11px"}}><i class="fas fa-arrow-circle-right"></i></button>
                    </div>
                </div>

            {/* About US */}
                <div class="col-3" style={{color:"black",float:"left"}}>
                    <h4 className="h">About</h4>
                     <Link to="/wishberry-team" ><p className="ptext">Meet the Team</p></Link>
                    <Link to="/wishberry-year-2015" ><p className="ptext">Year in Review '15</p></Link>
                    <Link to="/wishberry-year-2016" ><p className="ptext">Year in Review '16</p></Link>
                    <Link to="/press" ><p className="ptext">Press</p></Link>
                    <Link to="/terms" ><p className="ptext">Terms of Use</p></Link>
                    <Link to="/privacy-policy" ><p className="ptext">Privacy Policy</p></Link>
                </div>

            {/* Help */}
                <div class="col-3" style={{color:"black",float:"left"}}>
                    <h4 className="h">Help</h4>
                    <Link to="/how-it-works" ><p className="ptext">How it works</p></Link>
                    <Link to="/rules" ><p className="ptext">Project Rules</p></Link>
                    <Link to="/crowdfunding-handbook" ><p className="ptext">Crowdfunding-guide</p></Link>
                    <Link to="/faqs" ><p className="ptext">FAQs</p></Link>
                </div>
            {/* Browse*/}
                <div class="col-3" style={{color:"black",float:"left"}}>
                    <h4 className="h">Browse</h4>
                    <Link to="/succesfull-projects" ><p className="ptext">Successful Projects</p></Link>
                </div>
            {/* Contact Us */}
                <div class="col-3" style={{color:"black",float:"left"}}>
                    <h4 className="h">Contact</h4>
                    <p>Office No. 202/203,</p>
                    <p>Amar Arcade, Kulkarni Colony,</p>
                    <p>Nashik 422002, Maharashtra</p>
                    <p>info@wishberry.in</p>
                    <p>+91 22-49426200</p>
                </div>
                
            </div>
            <div class="col-12" style={{color:"black"}}><p>© 2019 All Rights Reserved Wishberry Online Services Pvt. Ltd. (CIN: U74999MH2009PTC191803)</p></div>
        </div>
    )
}

export default Footer