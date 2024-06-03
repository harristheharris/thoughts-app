const router = require("express").Router();
const {
  getUsers,
  getUserById,
  addUser,
  updateUser,
  deleteUser,
  addFriend,
  removeFriend,
} = require("../../controllers/thoughtUser-controller");

// /api/users
router.route("/").get(getUsers).post(addUser);

// /api/users/:id
router.route("/:id").get(getUserById).put(updateUser).delete(deleteUser);

// /api/users/:userId/friends/:friendId
router.route("/:userId/friends/:friendId").post(addFriend).delete(removeFriend);

module.exports = router;