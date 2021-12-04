const router = require("express").Router();

const { postList, postCreate, postDetail, postUpdate, postDelete } = require("./controllers");
const { isAuthorized } = require("./middleware");

router.get("/posts", postList);

router.post("/posts", isAuthorized, postCreate);

router.get("/posts/:id", postDetail);

router.patch("/posts/:id", isAuthorized, postUpdate);
router.delete("/posts/:id", isAuthorized, postDelete);


module.exports = router;
