const express = require("express");
const router = express.Router();
const {
  getQviqUser,
  createQviqUser,
  getQviqUserById,
  updateQviqUser,
  deleteQviqUser,
} = require("../controllers/qviq_user_ctrl");

// Debug API
router.get("/debug", (_, res) => {
  let data = "😍";
  return res.send({ data: data });
});

router.route("/qviquser").get(getQviqUser).post(createQviqUser);
router.route("/:id").get(getQviqUserById).put(updateQviqUser).delete(deleteQviqUser);

module.exports = router;
