const User = require("../userModel");
const Post = require("../postModel");


const postUpdate = async (req, res) => {
  const IdFromUrl = req.params.id;
  try {
    const post = await Post.findById(IdFromUrl).exec();
    if (post.user !== req.user)
      return res.status(403).send("You don't owe this post.")
  }
  catch {
    return res.status(404).send("Post not found")
  }
  Post.findByIdAndUpdate(IdFromUrl, req.body, { new: true })
    .then((post) => {
      if (!post)
        return res.status(404).send("Post not found to update")
      return res.status(200).send(post)
    })
    .catch((error) => {
      return res.status(500).send("Post not found to update");
    });
};

module.exports = postUpdate;
