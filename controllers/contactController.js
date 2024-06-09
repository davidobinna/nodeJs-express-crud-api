//@desc GET all contact
//@route GET /api/contacts
//@access public 

const getContact = (request, response) => {
    response.status(200).json({message: "Get all contacts"})
};


//@desc Create new contact
//@route POST/api/contacts
//@access public

const createContact = (request, response) => {

   console.log("The request Body", request.body)
   response.status(201).json({message: "Create contacts"})
}


//@desc Get contact by Id
//@route GET/api/contacts/:id
//@access public

const getContactById = (request, response) => {
    response.status(200).json({message: `Get contact for ID: ${request.params.id}` })
 }


//@desc Update contact by Id
//@route UPDATE/api/contacts/:id
//@access public

const updateContact = (request, response) => {
    response.status(200).json({message: `Update contact for ID: ${request.params.id}`})
 }


//@desc Delete contact by Id
//@route DELTE/api/contacts/:id
//@access public

 const deleteContact = (request, response) => {
    response.status(201).json({message: `Deleting contact By ID: ${request.params.id}`}) 
 }

module.exports = { getContact, createContact, getContactById, updateContact, deleteContact };