const mongoose = require('mongoose')

exports.ValidateID = ( req, res, next ) => {
  const id = req.params.id
  if (!mongoose.Types.ObjectId.isValid(id)) 
  {
    return res.status(400).json({message : 'Provide a valid ID'})
  }
  next()
}