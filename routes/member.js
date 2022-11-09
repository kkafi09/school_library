const {
  getAllMembers,
  addMember,
  findMember,
} = require("../controllers/memberController");
const router = require("express").Router();

router.get("/", getAllMembers);

router.post("/", addMember);

router.post("/find", findMember);

module.exports = router;
