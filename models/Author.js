import mongoose from 'mongoose'

const Schema = mongoose.Schema

export const Author = mongoose.model('Author', {
  name: String,
  books: [{
    type: Schema.Types.ObjectId,
    ref: 'Book'
  }]
})
