const AgencySchema = require('../schemas/')// add schema for agencies
const mongoose = require ('mongoose')


//Add agency 
exports.AddAgencyDB = async (data) => {
  try {
    const Agency =  new AgencySchema(data)
    return await Agency.save()
  } catch (error) {
    throw new error (error)
  }
}


//get all agencies
exports.GetAllAgenciesDB = async () => {
  try {
    const Agencies = await AgencySchema.find()
    return Agencies
  } catch (error) {
    throw new error (error)
  }
}


//Update Agency
exports.UpdateAgencyDB = async (id, data) => {
  try {
      return await AgencySchema.findByIdAndUpdate( { Object_id : id } , data , {new : true})
  } catch (error) {
    throw new error (error)
  }
}




//delete Agency
exports.DeleteAgencyDB = async (id) => {
  try {
      const AgencyToDelete = await AgencySchema.findByIdAndDelete({ Object_id : id })
      return AgencyToDelete
  } catch (error) {
    throw new error (error)
  }
}



//get Agency by ID
exports.GetAgencyByIdDB = async (id) => {
  try {
      const Agency = await AgencySchema.findOne({ Object_id : id })
      return Agency
  } catch (error) {
    throw new error (error)
  }
}