const {
  AddAgencyDB,
  GetAllAgenciesDB,
  UpdateAgencyDB,
  DeleteAgencyDB,
  GetAgencyByIdDB
} = require ('../models/methods/Agency.Methods')
const { bufferAndUploadMultiple } = require("../helpers/datauri")

//All agencies
exports.GetAllAgencies = async (req, res) => {
  try {
    const Agencies = await GetAllAgenciesDB()
    if (Agencies.length === 0) { 
      return res.status(404).json({ Message: 'Agencies not found' })
    }
    return res.status(200).send(Agencies)
  } catch (error) {
    return res.status(500).json({ Message: 'Failed to get Agencies' , Error : error.message})
  }
}


//Get Agencies by ID
exports.CreateAgency = async (req, res) => {
  try {
    const { name , description , location, contact, phoneNumber, socialMedia, website} = req.body
    const owner = req.user.id
    const images = await bufferAndUploadMultiple(req)
    const Object_id = generateCustomUUID()
    const newAgency = await AddAgencyDB ({name ,owner, images, Object_id,  description , location, contact, phoneNumber, socialMedia, website})
    return res.status(201).json({Message : 'Agency Created Successfully', result : newAgency})
  } catch (error) {
    return res.status(404).json({Message : 'Unable to add new agency', Error : err.message })
  }
}


//Delete Agency
exports.DeleteAgency = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({message : 'No Agency ID was provided'})
    }
    const AgencytoDelete = await DeleteAgencyDB(id)
    if (!AgencytoDelete) {
      return res.status(400).json({message : 'Error while deleting Agency'})
    }
    return res.status(200).json({message : 'Agency has been deleted'})
  } catch (error) {
    return res.status(404).json({message : 'Unable to Delete Agency', Error : err.message})
  }
}


//get agency by ID
exports.GetAgencyByID = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(404).json({message : 'No Agency ID was provided'})
    }
    const Agency = await GetAgencyByIdDB(id)
    if (!Agency) {
      return res.status(400).json({message : 'no Agency was found'})
    }
    return res.status(200).json({message : 'Agency retrieved successfully'})
  } catch (error) {
    return res.status(500).json({ message: 'Unable to retrieve Agency. Please try again later.', Error: err.message })
  }
}



//Update Agency
exports.UpdateAgency = async (req, res) => {
  try {
    const { id } = req.params
    if (!id) {
      return res.status(400).json({ message: 'No Agency ID was provided.' })
    }
    const images = await bufferAndUploadMultiple(req)
    const { name , description , location, contact, phoneNumber, socialMedia, website } = req.body
    const data = { name , description , location, contact, phoneNumber, socialMedia, website, images }
    if(!data){
        return res.status(400).json({ message: 'No Data was provided' })
    }
    const updatedAgency = await UpdateAgencyDB(id,data)
    if(!updatedAgency){
        return res.status(500).json({ message: 'Failed to update Agency in database' })
    }
    return res.status(200).json({ message: 'Agency updated successfully' })
  } catch (error) {
    return res.status(500).json({ message: 'Failed to updaet Agency', Error : error.message })
  }
}