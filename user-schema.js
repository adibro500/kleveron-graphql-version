export default 
`
type User{
    _id:String
    email:String
    password:String
  }
  
type Mutation {
 
    registerUser(
      email:String!,
      password:String!
    ): User!
}


  `