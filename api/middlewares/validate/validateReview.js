const { body, validationResult } = require('express-validator');

// Middleware to validate the review 

const validateReview = [
//validate rating 

  body('rating')
  .exists()
  .withMessage('Rating is required')
  .isNumeric()
  .withMessage('Rating must be a number')
  .isFloat({ min: 1, max: 5 })
  .withMessage('Rating must be between 1 and 5'),

//validate Comment 

  body('comment')
  .optional()
  .isString()
  .withMessage('Comment must be a string'),

 
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];

module.exports = validateReview;
