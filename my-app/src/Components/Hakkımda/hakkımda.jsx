import React from "react"
import {Image,Row,Col,Container} from "react-bootstrap"
import Zoom from 'react-reveal/Zoom';
import Navbar from "../Navbar"


function Hakkımda(){
      return <div id="Hakkımda">
            <Navbar bgColor="#20232A"/>
                  <Container>
                        <div id="profil" className="text-center pt-3 mb-5">
                        <Zoom left cascade>
                              <h1>Profile</h1>
                              <h4>Full Stack Developer</h4>
                              <hr className="profile-hr"></hr>
                        </Zoom>
                              <Row>
                                    <Col lg="6" className="colonlar"><Image src = "me.jpg" roundedCircle></Image></Col>
                                    <Col lg="6" className="colonlar"><h3>Details</h3><h5>Name:</h5><p>Ömer Bayramçavuş</p><h5>Age:</h5><p>19 years</p><h5>Location:</h5><p>Ankara/Turkey</p></Col>
                                    <Col lg="12" className="colonlar"><h3>About me</h3><p className="text-center">I am an allround web developer. I am a senior programmer with good knowledge of front-end techniques. I love structure and order and I also stand for quality. I love spending time on fixing little details and optimizing web apps. Also I like working in a team, you'll learn faster and much more. As the saying goes: 'two heads are better than one'.</p></Col>
                              </Row>
                        </div>
                  </Container>
                  <div id="Skills" className="text-center pb-5">
                  <Zoom cascade>
                        <h1 className="font-dancing text-primary display-1 skills-topic">My Skills</h1>
                        <hr className="profile-hr"></hr>
                        <Image className="skiller" src="Skills.png"></Image>
                        <Image id="figma-icon" src="figma.webp"/>
                        <h3 className="text-muted display-6">I also know Figma but I am a beginner. :)</h3>
                        <h3 className="display-6 mt-5">I want to improve myself in these applications or languages. I like to learn.</h3>
                  </Zoom>
                  </div>
      </div>
}



export default Hakkımda