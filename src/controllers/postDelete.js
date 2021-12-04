const User = require("../userModel");
const Post = require("../postModel");


const postDelete = async (req, res) => {
  const IdFromUrl = req.params.id;
  try {
    await Post.findByIdAndDelete(IdFromUrl);

    return res.status(204).send({ message: "Successfully deleted" });
  } catch (err) {
    return res.status(404).send({ "message": "Post not found" });
  }
};

module.exports = postDelete;
