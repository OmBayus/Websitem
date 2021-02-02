import React from "react"
import {Switch, Route} from "react-router-dom"
import AnaSayfa from "./Components/anasayfa/anasayfa"
import BlogItem from "./Components/Blog/Blogitem"
import Blog from "./Components/Blog/Blog"
import Footer from "./Components/Footer"
import Hakkımda from "./Components/Hakkımda/hakkımda"
import Deneme from "./Components/deneme"
import Bakim from "./Components/bakim"
import Login from "./Components/Admin/Login"

function App(){
      return(
      <Switch>

            <Route path="/" exact>
                  <AnaSayfa/>
                  <Footer/>
            </Route>
      
            <Route path="/about">
                  <Hakkımda/>
                  <Footer/>
            </Route>

            <Route path="/deneme">
                  <Deneme/>
            </Route>

            <Route path="/projects" exact>
                  <Bakim/>
                  <Footer/>
            </Route>

            <Route path="/login" exact>
                  <Login/>
                  <Footer/>
            </Route>

            <Route path="/blog" exact>
                  <Blog/>
                  <Footer/>
            </Route>

            <Route path="/blog/:id">
                  <BlogItem/>
                  <Footer/>
            </Route>
      

      </Switch>
      )
}




export default App