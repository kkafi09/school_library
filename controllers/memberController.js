const Member = require("../models/index").member;
const response = require("../utils/response");
const query = require("sequelize").Op;

const getAllMembers = async (req, res) => {
  let members = await Member.findAll();

  return response(200, members, "Berhasil mengambil data members", res);
};

const findMember = async (req, res) => {
  let { keyword } = req.body;

  let members = await Member.findOne({
    where: {
      [query.or]: [
        { name: { [query.substring]: keyword } },
        { gender: { [query.substring]: keyword } },
        { address: { [query.substring]: keyword } },
      ],
    },
  });

  return response(200, members, "All Members have been loaded", res);
};

const addMember = async (req, res) => {
  const { name, address, gender, contact } = req.body;
  let newMember = { name, address, gender, contact };

  Member.create(newMember)
    .then((result) => {
      return response(200, result, "New member has been inserted", res);
    })
    .catch((err) => response(400, null, err.message, res));
};

const updateMember = (req, res) => {
  const { name, address, gender, contact } = req.body;

  let dataMember = { name, address, gender, contact };

  let idMember = req.params.id;

  Member.update(dataMember, { where: { id: idMember } })
    .then((result) => {
      // If success update
      return response(200, result, "Data member has been updated", res);
    })
    .catch((error) => {
      return response(400, null, error.message, res);
    });
};

const deleteMember = (req, res) => {
  let idMember = req.params.id;

  Member.destroy({ where: { id: idMember } }).then((result) => {
    // if success deleted
    return response(200, result, "Data member has been updated", res).catch(
      (error) => {
        return response(400, null, error.message, res);
      }
    );
  });
};

module.exports = {
  getAllMembers,
  findMember,
  addMember,
  deleteMember,
  updateMember,
};
