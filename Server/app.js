require("dotenv").config()
const express = require("express")
const cors = require('cors')
const User = require('./user')
const Post = require('./post')


const app = express()

app.use(express.static('build'))

app.use(express.json())

app.use(cors())

app.post("/post",(req,res)=>{

      const newPost = new Post({
            topic:req.body.topic,
            author:req.body.author,
            date: req.body.date,
            title: req.body.title,
            img:req.body.img,
            youtubeLink: req.body.youtubeLink,
            content: req.body.content
      })

      newPost.save().then(result=>{
            res.json(result)
            console.log(result)
      })

})


app.get("/api/posts",(req,res)=>{

      Post.find({},(err,posts)=>{
            if (!err) {
                  console.log(posts)
            }
            res.json(posts)
      })

})






const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})