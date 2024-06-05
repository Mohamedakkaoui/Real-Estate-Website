const {body, validationResult} = require('express-validator')


const categories = ["Land", "House", "Apartement", "Office", "Villa"]
exports.validateListing = [

    // Validate title
    body('title')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Title is required')
    .isLength({min:3})
    .withMessage('Title must be at least 3 characters long'),
  
    // Validate description
    body('description')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Description is required')
    .isLength({min:5})
    .withMessage('Description must be at least 5 characters long'),
  
    // Validate category
    body('category')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Category is required')
    .isLength({min:3})
    .withMessage('category must be at least 3 characters long')
    .isIn(categories)
    .withMessage("Invalid option selected"),
  
    // Validate listingType
    body('listingType')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Listing type is required')
    .isLength({min:3})
    .withMessage('listingType must be at least 3 characters long'),
  
    // Validate location
    body('location')
    .trim()
    .isString()
    .notEmpty()
    .withMessage('Location is required'),
  
    // Validate price
    body('price')
    .isNumeric()
    .withMessage('Price must be a number')
    .notEmpty()
    .withMessage('Price is required'),
  
    // Validate size (optional)
    body('size')
    .optional()
    .isNumeric()
    .withMessage('Size must be a number')
    .isLength({ min: 1, max: 10 })
    .withMessage('Size must be between 1 and 10 characters'),
  
    // Validate images (optional)
    
    body('images')
    .optional(),
  
    (req, res, next) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }
      next();
    }
  ]