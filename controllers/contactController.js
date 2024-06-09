const asyncHandler = require("express-async-handler");


//@desc GET all contact
//@route GET /api/contacts
//@access public 

const getContact = asyncHandler(async (request, response) => {
    response.status(200).json({message: "Get all contacts"})
});


//@desc Create new contact
//@route POST/api/contacts
//@access public

const createContact =  asyncHandler(async (request, response) => {


   const {name, email, phone} = request.body;
  if (!name || !email || !phone) {
     response.status(400);
     throw new Error("All Fields are Mandatory");
  }

   response.status(201).json({message: "Create contacts"})
})


//@desc Get contact by Id
//@route GET/api/contacts/:id
//@access public

const getContactById = asyncHandler(async (request, response) => {
    response.status(200).json({message: `Get contact for ID: ${request.params.id}` })
 })


//@desc Update contact by Id
//@route UPDATE/api/contacts/:id
//@access public

const updateContact = asyncHandler(async (request, response) => {
    response.status(200).json({message: `Update contact for ID: ${request.params.id}`})
 });


//@desc Delete contact by Id
//@route DELTE/api/contacts/:id
//@access public

 const deleteContact = asyncHandler(async(request, response) => {
    response.status(201).json({message: `Deleting contact By ID: ${request.params.id}`}) 
 });

module.exports = { getContact, createContact, getContactById, updateContact, deleteContact };