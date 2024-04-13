const  ListingsSchema  = require ('../models/schemas/listing.Model')
const  ReviewSchema = require ('../models/schemas/reviews.Model')


//fucntion to select a schema
function schemaSelector(type) {
  try {
      switch (type) {
        case 'agencies':
          return AgencySchema;
        case 'listings':
          return ListingsSchema;
        case 'reviews':
          return ReviewSchema;
        default:
          break;
    }
  } catch (error) {
    throw error
  }
}

module.exports = schemaSelector