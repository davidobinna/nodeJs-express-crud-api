const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc GET all contact
//@route GET /api/contacts
//@access public 

const getContact = asyncHandler(async (request, response) => {
    const contacts = await Contact.find();
    response.status(200).json(contacts)
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
 
   const contact = await Contact.create({
    name,
    email,
    phone,
   });

   response.status(201).json(contact)
})


//@desc Get contact by Id
//@route GET/api/contacts/:id
//@access public

const getContactById = asyncHandler(async (request, response) => {
    const contact = await Contact.findById(request.params._id);
    console.log(contact)
    if (!contact) {
        response.status(404);
        throw Error("Contact not found")
    } 

    response.status(200).json(contact)
 });


//@desc Update contact by Id
//@route UPDATE/api/contacts/:id
//@access public

const updateContact = asyncHandler(async (request, response) => {
   
    const contact = await Contact.findById(request.params._id);
    
    if(!contact){
        response.status(404);
        throw Error("Contact Not Found")
    }

    const updatedContact = await Contact.findByIdAndUpdate(
        request.params._id,
        request.body,
        { new: true }
    );
   
    response.status(200).json(updatedContact)
 });


//@desc Delete contact by Id
//@route DELETE/api/contacts/:id
//@access public

 const deleteContact = asyncHandler(async(request, response) => {
    const contact = await Contact.findById(request.params._id)
   
    if (!contact) {
        response.status(404);
        throw Error("Contact Not Found")
    }
   //console.log(request.params._id);
   await Contact.findByIdAndDelete(request.params._id)
    response.status(201).json(contact) 
 });

module.exports = { getContact, createContact, getContactById, updateContact, deleteContact };

