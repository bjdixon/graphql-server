import { gql } from 'apollo-server-express'
import { Author } from '../models/Author'
import { Book } from '../models/Book'

const typeDefs = gql`
  type Query {
    message: String!
    authors: [Author!]!
    books: [Book!]!
  }
  type Author {
    id: ID!
    name: String!
  }
  type Book {
    id: ID!
    name: String!
    pages: Int
  }
  type Mutation {
    createAuthor(name: String!): Author!
    createBook(name: String!, pages: Int): Book!
  }
`

const resolvers = {
  Query: {
    message: () => 'hello world',
    authors: () => Author.find(),
    books: () => Book.find()
  },
  Mutation: {
    createAuthor: async (_, { name }) => {
      const author = new Author({ name });
      await author.save();
      return author;
    },
    createBook: async (_, { name, pages }) => {
      const book = new Book({ name, pages });
      await book.save();
      return book;
    }
  }
}

export {
  typeDefs,
  resolvers
}
