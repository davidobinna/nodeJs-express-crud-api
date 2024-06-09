const express = require("express")
const router = express.Router();

router.route("/").get((request, response) => {
    response.status(200).json({message: "Get all contacts"})
})


module.exports = router;