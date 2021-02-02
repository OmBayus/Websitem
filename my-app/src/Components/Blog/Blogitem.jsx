import React, { useEffect, useState } from "react"
import {Jumbotron,Container,Image} from "react-bootstrap"
import {Link,useRouteMatch} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import {MdDateRange} from "react-icons/md"
import Zoom from 'react-reveal/Zoom';
import Navbar from "../Navbar"
import axios from "axios"


const Blogitem = ()=>{

      const url = "http://localhost:4000/"

      const match = useRouteMatch("/blog/:id/")

      const [post,setPost] = useState({
            topic:"",
            author:"",
            date: "",
            title: "",
            img:"",
            youtubeLink: "",
            content: ""
      })


      useEffect(()=>{
            window.scroll(0,0)
            axios.get((url+"api/posts")).then(
                  res=>{
                        const post = res.data.find((item)=>{
                              return item.id === (match.params.id)
                        })
                        setPost(post)
                  }
            )
      },[])


      return <div className="blog">
            <Navbar bgColor="#20232A"/>
            <Jumbotron fluid className="last-post">
                  <Container>
                              <p className="text-center text-info pt-5"> - {post.topic} - </p>
                              <Zoom cascade>
                                    <h1 className="text-center pb-5">{post.title}</h1>
                              </Zoom>
                              <p className="mb-5"><span className="ml-5 text-muted border p-2"><MdDateRange className="mr-1 mb-1"/>{post.date}</span><span className="float-right mr-5"><CgProfile className="mr-1 mb-1"/> Yazar <Link to="/about">{post.author}</Link></span></p>
                              {post.youtubeLink ? <iframe title="youtube" className="youtube-link" src={post.youtubeLink} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : <Image src={"/"+post.img} thumbnail className="youtube-link"/>}
                              <p className="mb-5 post-content">
                              {post.content}
                              </p>
                              <p className="text-center mb-0 pb-5">
                              </p>
                  </Container>
            </Jumbotron>
            <div style={{paddingBottom:100}}></div>
      </div>

}


export default Blogitem