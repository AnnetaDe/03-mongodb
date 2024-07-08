const ContactDB = require('../db/contactsSchema.js');
const getContactsDB = () => ContactDB.find({});
const getContactIDDB = id => {
  ContactDB.findOne(_id);
};
const removeContactDB = id => ContactDB.deleteOne({ _id });
const updateContactDB = id => ContactDB.updateOne({ _id });

module.exports = {
  getContactIDDB,
  getContactsDB,
  removeContactDB,
  updateContactDB,
};
