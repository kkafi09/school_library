const {
  getAllMembers,
  addMember,
  findMember,
  updateMember,
  deleteMember,
} = require("../controllers/memberController");
const router = require("express").Router();

router.get("/", getAllMembers);

router.post("/", addMember);

router.post("/find", findMember);

router.put("/:id", updateMember);

router.delete("/:id", deleteMember);

module.exports = router;
