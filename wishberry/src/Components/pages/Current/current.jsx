import React from 'react'
import { Card } from "react-bootstrap";
import "./current.css"

const Current = ()=>{
    return(
        <div>
            <div className="mid">
                <div className="search">
                    <input className="Inp-search" type="text" placeholder="Search Campaign"/>
                </div>
                <div className="sidebar">
                    <h4 className="sidebar-h">Genere</h4>
                    <div className="sidebar-div">
                         <input type="checkbox" id="ALL" name="ALL" value="All"/>
                         <label style={{marginLeft:"30px"}} for="ALL"> ALL</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Social" name="Social" value="Social"/>
                         <label style={{marginLeft:"30px"}} for="Social"> Social</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Comic" name="Comic" value="Comic"/>
                         <label style={{marginLeft:"30px"}} for="Comic"> Comic</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Film" name="Film" value="Film"/>
                         <label style={{marginLeft:"30px"}} for="Film"> Film</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Music" name="Music" value="Music"/>
                         <label style={{marginLeft:"30px"}} for="Music"> Music</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Art" name="Art" value="Art"/>
                         <label style={{marginLeft:"30px"}} for="Art"> Art</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Publishing" name="Publishing" value="Publishing"/>
                         <label style={{marginLeft:"30px"}} for="Publishing"> Publishing</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="ProductDesign" name="ProductDesign" value="Product Design"/>
                         <label style={{marginLeft:"30px"}} for="Product Design"> Product Design</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Theater" name="Theater" value="Theater"/>
                         <label style={{marginLeft:"30px"}} for="Theater"> Theater</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Photography" name="Photography" value="Photography"/>
                         <label style={{marginLeft:"30px"}} for="Photography"> Photography</label>
                    </div>

                    <h4 className="sidebar-h">Status</h4>

                    <div className="sidebar-div">
                         <input type="checkbox" id="ALL" name="ALL" value="ALL"/>
                         <label style={{marginLeft:"30px"}} for="ALL"> ALL</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Live" name="Live" value="Live"/>
                         <label style={{marginLeft:"30px"}} for="Live"> Live</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Upcoming" name="Upcoming" value="Upcoming"/>
                         <label style={{marginLeft:"30px"}} for="Upcoming"> Upcoming</label>
                    </div>

                    <div className="sidebar-div">
                         <input type="checkbox" id="Successfull" name="Successfull" value="Successfull"/>
                         <label style={{marginLeft:"30px"}} for="Successfull"> Successfull</label>
                    </div>

                </div>
                <div className="main">
                    <h3 style={{borderBottom:"5px solid yellow",marginLeft:"45%",marginTop:"30px",width:"100px"}}>Live</h3>

                    <div style={{float:"left"}}>
                        <Card style={{ width: '22rem',height:"550px",textAlign:"left",margin:"30px"}}>
                            <Card.Img variant="top" src="https://wb-new.s3.ap-south-1.amazonaws.com/campaigns/81384/cover/1604499419872_33808828-1D1B-467B-A189-8785330BF34A.jpeg" />
                            <Card.Body>
                                <Card.Title>Navarasa</Card.Title>
                                <Card.Text>Nisha Satpute</Card.Text>
                                <Card.Text>
                            Navarasa is a music album of nine ghazals, composed in different genres and languages with a common aim to evoke a specific emotion pertaining to the Rasa.
                                </Card.Text>
                            </Card.Body>
                            <p style={{border:"1px solid black",width:"120px",padding:"5px",borderRadius:"5px",textAlign:"center",marginLeft:"30px"}}>Music</p>
                            <Card.Footer>
                                <div style={{float:"left",width:"33%",textAlign:"center"}}><h6>32% Pledge</h6></div>
                                <div style={{float:"left",width:"33%",textAlign:"center"}}><h6>₹ 2,08,461 Pledged</h6></div>
                                <div style={{float:"left",width:"33%",textAlign:"center"}}><h6>25 Days left</h6></div>
                            </Card.Footer>
                        </Card>
                    </div>

                    <div style={{float:"left"}}>
                        <Card style={{ width: '22rem',height:"550px",textAlign:"left",margin:"30px"}}>
                            <Card.Img variant="top" src="https://wb-new.s3.ap-south-1.amazonaws.com/campaigns/81093/cover/1593374282627_Home.jpg" />
                            <Card.Body>
                                <Card.Title>Forest Archives - A Coffee Table Book</Card.Title>
                                <Card.Text>Lokesh Dodla</Card.Text>
                                <Card.Text>
                                Forest Archives is a fine art coffee table book showcasing some of the most evocative and beautiful moments, from wildlife reserves and sanctuaries of India.
                                </Card.Text>
                            </Card.Body>
                            <p style={{border:"1px solid black",width:"120px",padding:"5px",borderRadius:"5px",textAlign:"center",marginLeft:"30px"}}>Photography</p>
                            <Card.Footer>
                                <div style={{float:"left",width:"33%",textAlign:"center"}}><h6>32% Pledge</h6></div>
                                <div style={{float:"left",width:"33%",textAlign:"center"}}><h6>₹ 2,08,461 Pledged</h6></div>
                                <div style={{float:"left",width:"33%",textAlign:"center"}}><h6>25 Days left</h6></div>
                            </Card.Footer>
                        </Card>
                    </div>

                    <h3 style={{borderBottom:"5px solid yellow",marginLeft:"45%",marginTop:"30px",width:"100px"}}>ComingSoon</h3>
                </div>
            </div>
        </div>
    )
}

export default Current