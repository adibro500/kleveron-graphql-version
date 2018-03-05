export default `

type Control {
  _id: String
  name: String
  conferenceName: String
  video: String
  votes: Int
  description: String
  speakerName: String
  date: String
}

type Query {
  allControls(
    name: String,
    conferenceName: String,
    video: String,
    description: String,
    speakerName: String,
  ): [Control!]!,

  getControl(
    id: String!
  ): Control!,

  allUsers(
    email:String,
    password:String
  ):[User]!
}

type Mutation {
  createControl(
    name: String!,
    conferenceName: String!,
    video: String!,
    description: String!,
    speakerName: String!,
    date: String!
  ): Control!

  registerUser(
    email:String!,
    password:String!
  ): User!

  upvoteControl(
    id: String!
  ): Control!
}
type User{
  _id:String
  email:String
  password:String
}

`
