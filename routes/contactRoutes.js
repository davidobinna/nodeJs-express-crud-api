const express = require("express")
const router = express.Router();

router.route("/").get((request, response) => {
    response.status(200).json({message: "Get all contacts"})
})


router.route("/").post((request, response) => {
    response.status(200).json({message: "Create contacts"})
})

router.route("/:id").get((request, response) => {
    response.status(200).json({message: `Get contact for ID: ${request.params.id}` })
})

router.route("/:id").put((request, response) => {
    response.status(200).json({message: `Update contact for ID: ${request.params.id}`})
})

router.route("/:id").delete((request, response) => {
    response.status(200).json({message: `Deleted contact for ID: ${request.params.id}`})
})


module.exports = router;