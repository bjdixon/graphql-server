import { ApolloServer } from 'apollo-server-express'
import express from 'express'
import mongoose from 'mongoose'
import { typeDefs, resolvers } from './schema'

const start= async () => {
  const app = express()

  const server = new ApolloServer({ typeDefs, resolvers })

  server.applyMiddleware({ app })

  await mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true })

  app.listen({ port: 4000 }, () =>
    console.log(`Server listening on http://localhost:4000${server.graphqlPath}`)
  )
}

start()
