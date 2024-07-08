const ctrl = require('../helpers/ctrl.js');
const HttpError = require('../helpers/HttpError.js');
const ContactDB = require('../db/contactsSchema.js');

const getAllContacts = async (req, res) => {
  const result = await ContactDB.find({});
  console.log(result);
  res.json(result);
};
const getOneContact = async (req, res) => {
  const { _id } = req.params;
  const result = await contacts.ContactDB.findOne(_id);
  if (!result) {
    throw HttpError(404, 'not found');
  }
  res.json(result);
};
const deleteContact = async (req, res) => {
  const { _id } = req.params;
  const result = await ContactDB.findByIdAndDelete(_id);
};
const createContact = async (req, res) => {
  const result = await ContactDB.create(req.body);
  res.json({
    status: 'success',
    code: 201,
    data: { result },
  });
};
const updateContact = async (req, res) => {
  const { id } = req.params;
  const result = await ContactDB.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }

  res.json(result);
};
const updateFavorite = async (req, res) => {
  const { id } = req.params;
  const result = await ContactDB.findByIdAndUpdate(id, req.body, { new: true });
  if (!result) {
    throw HttpError(404, 'Not found');
  }
  res.json(result);
};
module.exports = {
  createContact: ctrl(createContact),
  deleteContact: ctrl(deleteContact),
  getAllContacts: ctrl(getAllContacts),
  getOneContact: ctrl(getOneContact),
  updateContact: ctrl(updateContact),
  updateFavorite: ctrl(updateFavorite),
};
