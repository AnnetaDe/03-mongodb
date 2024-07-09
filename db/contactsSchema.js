const Joi = require('joi');
const { version } = require('joi');
const { Schema, model } = require('mongoose');

const contactSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    phone: { type: String, required: true },
    favorite: { type: Boolean, required: true },
  },
  { versionKey: false, timestamps: true }
);
const createContactSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
});
const updateContactSchema = Joi.object({
  name: Joi.string(),
  email: Joi.string(),
  phone: Joi.string(),
  favorite: Joi.boolean(),
});

const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean(),
});
const schemas = {
  createContactSchema,
  updateFavoriteSchema,
  updateContactSchema,
};

const ContactDB = model('contact', contactSchema);
(module.exports = ContactDB), schemas;
