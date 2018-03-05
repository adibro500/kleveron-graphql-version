import mongoose from 'mongoose'

const Control = mongoose.model('Control', {
  name: String,
  conferenceName: String,
  video: String,
  votes: Number,
  description: String,
  speakerName: String,
  date: Date
})



export default Control