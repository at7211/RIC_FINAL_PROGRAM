import { ApolloServer, gql } from 'apollo-server';
import db from './db.js'
import Query from './resolvers/Query'
import Mutation from './resolvers/Mutation'
// ApolloServer: 讓我們啟動 server 的 class ，不但實作許多 GraphQL 功能也提供 web application 的功能 (背後使用 express)
// gql: template literal tag, 讓你在 Javascript 中使用 GraphQL 語法

// 1. GraphQL Schema 定義
const typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
    activities: [Activity!]!
    users: [User!]!
  }

  type Mutation {
    "註冊。 email 與 passwrod 必填"
    signUp (account: String, email: String!, password: String!): User
    login (account: String!, password: String!): Token
    programApply (name: String!, studentID: String!, department: String!, phone: String!, mobile: String!, email: String!, address: String!): ProgramApplyUser
  }

  type Activity {
    id: ID!
    link: String!
    title: String!
    content: String!
    date: String!
  }

  type User {
    id: ID!
    account: String!
    password: String!
    email: String!
  }

  type ProgramApplyUser {
    id: ID!
    name: String!
    studentID: String!
    department: String!
    phone: String!
    mobile: String!
    email: String!
    address: String!
  }

  type Token {
    token: String!
  }
`;

// 3. 初始化 Web Server ，需傳入 typeDefs (Schema) 與 resolvers (Resolver)
const server = new ApolloServer({
  // Schema 部分
  typeDefs,
  // Resolver 部分
  resolvers: {
    Query,
    Mutation
  },
  context: {
    db,
    // pubsub,
    // startdb,
  }
});

// 4. 啟動 Server
server.listen().then(({ url }) => {
  console.log(`? Server ready at ${url}`);
});