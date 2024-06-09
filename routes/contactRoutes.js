const express = require("express")
const router = express.Router();
const {
    getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact} = require("../controllers/contactController");


router.route("/contacts").get(getContact).post(createContact);

router.route("/contacts/:id").get(getContactById).put(updateContact).delete(deleteContact);

module.exports = router;