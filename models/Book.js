import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const Book = mongoose.model('Book', {
  name: String,
  pages: Number,
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author'
  }
})
