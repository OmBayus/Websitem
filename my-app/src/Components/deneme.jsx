import Axios from "axios"
import React, { useState } from "react"


export default function Deneme(){

      const [data,setData] = useState({
            topic:"",
            author:"",
            date: "24 Ekim 1995",
            title:"",
            img: "me.jpg",
            youtubeLink:"https://www.youtube.com/embed/I8E1rK6F-N8",
            content:""
      })

      const handleChange = (e)=>{
            const {name,value} = e.target
            
            if (name==="topic") {
                  setData(prevValue=>{
                        return {
                              ...prevValue,
                              topic:value
                        }
                  })
            }
            if (name==="author") {
                  setData(prevValue=>{
                        return {
                              ...prevValue,
                              author:value
                        }
                  })
            }
            if (name==="title") {
                  setData(prevValue=>{
                        return {
                              ...prevValue,
                              title:value
                        }
                  })
            }
            if (name==="content") {
                  setData(prevValue=>{
                        return {
                              ...prevValue,
                              content:value
                        }
                  })
            } 
      }

      const Submit = (e)=>{
            e.preventDefault()
            Axios.post("http://localhost:4000/post",data).then(
                  res=>{
                        console.log(res)
                  }
            )
      }

      return <form>
            <input name="topic" onChange={handleChange}/>
            <input name="author" onChange={handleChange}/>
            <input name="title" onChange={handleChange}/>
            <input name="content" onChange={handleChange}/>
            <button type="submit" onClick={Submit}>Submit</button>
      </form>
}