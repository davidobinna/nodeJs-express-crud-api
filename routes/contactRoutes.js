const express = require("express")
const router = express.Router();
const {getContact, createContact, getContactById, updateContact, deleteContact} = require("../controllers/contactController");


router.route("/contacts").get(getContact);


router.route("/contacts").post(createContact)

router.route("/contacts/:id").get(getContactById)

router.route("/contacts/:id").put(updateContact)

router.route("/contacts/:id").delete(deleteContact)


module.exports = router;