import mongoose from 'mongoose'

export const Book = mongoose.model('Book', {
  name: String,
  pages: Number
})
