export default {
  Query: {
    allControls: async (parent, args, { Control }) => {
      const controls = await Control.find(args)
      return controls.map(x => {
        x._id = x._id.toString()
        return x
      })
    },
    getControl: async (parent, args, { Control }) => {
      const control = await Control.findById(args.id)
      return talk
    },

  allUsers: async (parent, args, { User }) => {
    const users = await User.find(args)
    return users.map(x => {
      x._id = x._id.toString()
      return x
    })
  }
},

  Mutation: {
    createControl: async (parent, args, { Control }) => {
      const control = await new Control(args).save()
      control._id = control._id.toString()
      return control
    },
    upvoteControl: async (parent, args, { Control }) => {
      const control = await Control.findById(args.id)
      control.set({ votes: control.votes ? control.votes + 1 : 1 })
      await control.save()
      return control
    },
    registerUser: async (parent,args,{ User })=>{
      const user = await new User(args).save();
       user._id = user._id.toString()
      return user;
  
    }
  }
}
