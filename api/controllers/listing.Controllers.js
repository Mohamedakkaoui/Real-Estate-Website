const {getAllLinsting}=require('../models/methods/listing.Methods');

//All listing
exports.getLinstings = async (req, res) => {
    try {
      const listings = await getAllLinsting(); 
      if (listings.length === 0) { 
        return res.status(404).json({ message: 'Listings not found' });
      }
      res.status(200).json(listings);
    } catch (error) {
      console.error(error); 
      res.status(500).json({ message: 'Failed to get Listings' }); 
    }
  };