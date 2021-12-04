const User = require("../userModel");
const Post = require("../postModel");


const postDetail = async (req, res) => {
  const IdFromUrl = req.params.id;
  try {
    const post = await Post.findById(IdFromUrl).exec();
    return res.status(201).send({ post });
  } catch (err) {
    return res.status(404).send({ "message": "Post not found" });
  }
};

module.exports = postDetail;
