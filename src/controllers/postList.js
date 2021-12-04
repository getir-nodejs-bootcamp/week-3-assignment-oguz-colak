const User = require("../userModel");
const Post = require("../postModel");


const postList = async (req, res) => {
  try {
    const posts = await Post.find({});
    return res.status(201).send({ posts });
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = postList;
