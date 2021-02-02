import React, { useState } from "react"
import {BsList} from "react-icons/bs"
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import {Link} from "react-router-dom"

function Navbar({bgColor}){

      const [checkResNav,setCheckResNav] = useState(false)

      function checkButton(event){
            const id = event.target.id

            if (id ==="navbar-main-responsive") {
                  setCheckResNav(false)    
            }
            else{
                  setCheckResNav(true)
            }
      }

      return <Slide top>
      <div id="Navbar" style={{backgroundColor:bgColor}}>
            <ul className="Navbar-ul">
                  <li className="navbar-icon"><img alt="react-logo" src="/reactlogo.png" width="40" height="40" className="d-inline-block align-top react-logo"/></li>
                  <li><Link to="/" className="navbar-main">OmBayus</Link></li>
                  <li id="navbar-items" className="float-right">
                        <Link to="/blog" className="navbar-item">Blog</Link>
                        <Link to="/about" className="navbar-item">About Me</Link>
                        <Link to="/projects" className="navbar-item">Projects</Link>
                  </li>
            </ul>
            <div>
                  <BsList className="check-icon" onClick={checkButton}/>
                  <div id={checkResNav ? null : "check-navbar-responsive"}>
                        <div id="navbar-main-responsive" onClick={checkButton}></div>
                        <Fade right>
                        <div id="navbar-responsive">

                              <ul>
                                    <li className="ml-4 mt-3 text-muted">Ömer Bayramçavuş</li>
                                    <hr></hr>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/blog">Blog</Link></li>
                                    <li><Link to="/about">About Me</Link></li>
                                    <li><Link to="/projects">Projects</Link></li>
                              </ul>

                        </div>
                        </Fade>
                  </div>
            </div>

      </div>
      </Slide>
}

export default Navbar