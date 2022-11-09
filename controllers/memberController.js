const Member = require("../models/member");
const response = require("../utils/response");
const query = require("sequelize").Op;

const getAllMembers = async (req, res) => {
  let members = await Member.findAll();

  return response(200, members, "Berhasil mengambil data members", res);
};

const findMember = async (req, res) => {
  let { keyword } = req.body;

  let members = await Member.find({
    where: {
      [query.or]: [{ name: { [query.substring]: keyword } }],
      [query.or]: [{ gender: { [query.substring]: keyword } }],
      [query.or]: [{ address: { [query.substring]: keyword } }],
    },
  });

  return response(200, members, "All Members have been loaded", res);
};

const addMember = async (req, res) => {
  const { name, address, gender, contact } = req.body;
  let newMember = { name, address, gender, contact };

  Member.create(newMember)
    .then((result) => {
      return response(200, result, "New member has been inserted");
    })
    .catch((err) => response(400, null, err.message, res));
};

module.exports = { getAllMembers, findMember, addMember };
