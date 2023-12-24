import express from "express";

import contactsController from "../../controllers/contacts-controller.js";

import { isEmptyBody } from "../../middlewares/index.js";

import { validateBody } from "../../decorators/index.js";

import {
  contactAddSchema,
  contactUpdateSchema,
} from "../../schemas/contacts-schemas.js";

const router = express.Router();

router.get("/", contactsController.getAllContacts);

router.get("/:contactId", contactsController.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactAddSchema),
  contactsController.add
);

router.put(
  "/:contactId",
  isEmptyBody,
  validateBody(contactUpdateSchema),
  contactsController.updateById
);

router.delete("/:contactId", contactsController.deleteById);

export default router;
