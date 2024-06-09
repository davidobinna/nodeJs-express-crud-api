const express = require("express")
const router = express.Router();
const {
    getContact,
    createContact,
    getContactById,
    updateContact,
    deleteContact} = require("../controllers/contactController");


router.route("/contacts").get(getContact).post(createContact);

router.route("/contacts/:_id").get(getContactById).put(updateContact).delete(deleteContact);

router.route("/contacts/:_id").delete(deleteContact);

module.exports = router;