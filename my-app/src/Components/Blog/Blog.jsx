import React, { useEffect, useState } from "react"
import {Jumbotron,Container,Button,Image} from "react-bootstrap"
import {Link} from "react-router-dom"
import {CgProfile} from "react-icons/cg"
import {MdDateRange} from "react-icons/md"
import CardBlog from "../Card"
import Navbar from "../Navbar"
import axios from "axios"
import Bounce from "react-reveal/Bounce"


const Blog = ()=>{

      const url = "http://localhost:4000/"

      const [count,setCount] = useState(3)

      const [posts,setPosts] = useState([{       
            topic:"",
            author:"",
            date: "",
            title: "",
            img:"",
            youtubeLink: "",
            content: ""
      }])

      function Arrow(){
            setCount(prevValue =>{
                  return prevValue + 3
            })
      }


      useEffect(()=>{
            axios.get((url+"api/posts")).then(
                  res=>{
                        setPosts(res.data)
                  }
            )
      },[])


      return <div className="blog">
            <Navbar bgColor="#20232A"/>
            {
                  
                  posts.reverse().map((post,index)=>{
                  return index === 0 ? <Jumbotron key={index} fluid className="last-post">
                        <Container>
                              <p className="text-center text-info pt-5"> - {post.topic} - </p>
                              <h1 className="text-center pb-5">{post.title}</h1>
                              <p className="mb-5"><span className="ml-5 text-muted border p-2"><MdDateRange className="mr-1 mb-1"/>{post.date}</span><span className="float-right mr-5"><CgProfile className="mr-1 mb-1"/> Yazar <Link to="/about">{post.author}</Link></span></p>
                              {post.youtubeLink ? <iframe title="youtube" className="youtube-link" src={post.youtubeLink} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe> : <Image src={post.img} thumbnail className="youtube-link"/>}
                              <p className="mb-5 post-content">
                              {post.content.slice(0,400)}...
                              </p>
                              <p className="text-center mb-0 pb-5">
                              <Button className="learn-more-link" variant="outline-primary" size="lg"><Link to={"/blog/"+post.id}>Learn more</Link></Button>
                              </p>
                        </Container>
                  </Jumbotron> : (index < count && <Bounce left key={index}><CardBlog id={String(post.id)} topic={post.topic} author={post.author} date={post.date} title={post.title} content={post.content.slice(0,300)+"..."} img={post.img} /></Bounce>)
                  
            })}
            <div style={{paddingBottom:100}}></div>
            {count < posts.length && <Link onClick={Arrow} class="ca3-scroll-down-link ca3-scroll-down-arrow" data-ca3_iconfont="ETmodules" data-ca3_icon=""></Link>}
            <div style={{paddingBottom:100}}></div>
      </div>

}


export default Blog