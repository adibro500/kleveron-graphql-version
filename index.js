import express from 'express'
import bodyParser from 'body-parser'
import { graphiqlExpress, graphqlExpress } from 'apollo-server-express'
import { makeExecutableSchema } from 'graphql-tools'
import mongoose from 'mongoose'

import typeDefs from './schema'
import typeDefs2 from './user-schema'
import resolvers from './resolvers'
import resolvers2 from './user-resolver'
import Control from './model'
import User from './user-model'
const env = require('dotenv').config()


const schema = makeExecutableSchema({
  typeDefs,
  resolvers
})

mongoose.connect(
 
  'mongodb://root:root@ds133378.mlab.com:33378/kleveron' 
)

const PORT = 3000

const app = express()

// app.use(
//   '/graphql',
//   bodyParser.json(),
//   graphqlExpress({ schema, context: { User }})
// )

app.use(
  '/graphql',
  bodyParser.json(),
  graphqlExpress({ schema, context: { Control,User }})
)


// app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }))

app.get('/',(req,res)=>{
  res.redirect('/graphiql');
}
)

app.listen(PORT)

console.log(`YASS QUEEN ON PORT: ${PORT}`)
