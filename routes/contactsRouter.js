const express = require('express');

const {
  getAllContacts,
  getOneContact,
  deleteContact,
  createContact,
  updateContact,
  updateFavorite,
} = require('../controllers/contactsControllers');

const schemas = require('../schemas/contactsSchemas');
const { validateBody } = require('../helpers/validateBody');

const contactsRouter = express.Router();

contactsRouter.get('/', getAllContacts);

contactsRouter.get('/:id', getOneContact);

contactsRouter.delete('/:id', deleteContact);

contactsRouter.post(
  '/',
  validateBody(schemas.createContactSchema),
  createContact
);

contactsRouter.put(
  '/:id',
  validateBody(schemas.updateContactSchema),
  updateContact
);
contactsRouter.patch(
  '/:id',
  validateBody(schemas.updateContactSchema),
  updateFavorite
);

module.exports = contactsRouter;
