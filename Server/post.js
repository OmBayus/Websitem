const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

const postSchema = new mongoose.Schema({
      topic: String,
      author: String,
      date: String,
      title: String,
      img: String,
      youtubeLink: String,
      content: String
})

postSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Post', postSchema)