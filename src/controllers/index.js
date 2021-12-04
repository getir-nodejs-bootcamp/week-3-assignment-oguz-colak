const login = require("./login");
const register = require("./register");
const tokenRefresh = require("./tokenRefresh");

const postList = require('./postList');
const postCreate = require('./postCreate');
const postDetail = require('./postDetail');
const postUpdate = require('./postUpdate');
const postDelete = require('./postDelete');

module.exports = {
  login,
  register,
  tokenRefresh,
  postList,
  postCreate,
  postDetail,
  postUpdate,
  postDelete
};
