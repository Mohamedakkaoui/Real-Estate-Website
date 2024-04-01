const ListingsSchema = require('../schemas/listing.Model');

exports.getAllLinsting = async () => {
    try {
      const listing = await ListingsSchema.find();
      return listing ;
    } catch (error) {
      throw new Error('Failed to fetch listing from the database : ' + error)
    }
}