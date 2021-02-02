import React from "react"
import Navbar from "../Navbar"
import {Container,Button} from "react-bootstrap"
import Slide from "react-reveal/Slide"
import Shake from "react-reveal/Shake"
import {Link} from "react-router-dom"



function Anasayfa(){


   
      return <div className="Anasayfa">
            <Navbar/>
            <Container fluid>
                  <div className="text-center hello">
                        <img src="roket.png" className="roket1" alt="roket1"></img>
                        <img src="roket.png" className="roket2" alt="roket2"></img>
                        <Slide top cascade>
                              <h1 className="hello-topic">Ömer Bayramçavuş</h1>
                        </Slide>
                        <hr className="hello-hr"></hr>
                        <Slide bottom cascade>
                              <h2  className="hello-info">Interactive resume</h2>
                        </Slide>
                        <div className="learn-more">
                              <Shake>
                                    <Button id="hello-btn" variant="outline-light" size="lg" as={Link} to="/about">Learn more</Button>
                              </Shake>
                        </div>
                  </div>
            </Container>

      </div>
        
}

export default Anasayfa
