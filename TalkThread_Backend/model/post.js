const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  userId: {
    type: [mongoose.Schema.Types.ObjectId],
    ref : "user",
    required: true
  },
  email: {
    type: String,
    required: true,
  },
  image: {
    type: Buffer,
    required: true
  },
  caption:{
    type : String,
    default : null
  },
  likedby: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "user",
    default: []
  },
  comment: [
    {
      user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
      },
      name: {
        type: String,
        required: true
      },
      // profile: {
      //   type: String,
      //   required: true
      // },
      comment: {
        type: String,
        required: true
      }
    }
  ]
}, { timestamps: true });

const Post = mongoose.model("Post", postSchema);
module.exports = Post;
