const schemaSelector  = require('../helpers/SchemaChoice')
const TypeHandler = require ('../helpers/UrlHandler')

exports.IsOwner = async ( req, res, next ) => {
  const ObjectUuid = req.params.id //uuid 
  const Id = req.user.id //user id
  const type = TypeHandler(req.originalUrl)
  const Schema = schemaSelector(type)
  const Object = await Schema.findOne({ Object_id : ObjectUuid })//
  if (!Object) {
    return res.status(404).json({ message: 'Object not found' });
  }
  const Object_id = Object.owner
  const Obj = JSON.stringify(Object_id)
  const UserID = Obj.split('"').join('')
  if (!(UserID == Id)) {
    return res.status(403).json({message : 'Access Denied'})
  }
  next()
}