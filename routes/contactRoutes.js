const express = require("express")
const router = express.Router();
const {getContact, createContact, getContactById, updateContact} = require("../controllers/contactController");


router.route("/contacts").get(getContact);


router.route("/contacts").post(createContact)

router.route("/contacts/:id").get(getContactById)

router.route("/contacts/:id").put(updateContact)

router.route("/contacts/:id").delete((request, response) => {
    response.status(200).json({message: `Deleted contact for ID: ${request.params.id}`})
})


module.exports = router;