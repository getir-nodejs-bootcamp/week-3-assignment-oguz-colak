const User = require("../userModel");
const Post = require("../postModel");


const postCreate = async (req, res) => {
  // Check if user exist with that user_id in DB
  const userExist = await User.findById(req.user).exec();
  if (!userExist)
    return res.status(400).send("user not found");

  // body parse
  const content = req.body.content;
  const title = req.body.title;
  const user = req.user;

  // Create PostModel
  const post = new Post({
    user: req.user,
    title: req.body.title,
    content: content,
  });

  try {
    const savedPost = await post.save();
    return res.status(201).send(savedPost);
  } catch (err) {
    return res.status(400).send(err);
  }
};

module.exports = postCreate;
