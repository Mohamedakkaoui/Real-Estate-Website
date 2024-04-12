const { body, validationResult } = require('express-validator');

// Middleware to validate the user information
exports.validateUser = [

   //validate firstName
  body('FirstName')
  .exists()
  .withMessage('First name is required'),

  //validate lastName
  body('LastName')
  .exists()
  .withMessage('Last name is required'),

  //validate UserName
  body('Username')
  .exists()
  .withMessage('Username is required')
  .isLength({ min: 3 })
  .withMessage('Username must be at least 3 characters long'),

  //validate Email
  body('Email')
  .exists()
  .withMessage('Email is required')
  .isEmail().withMessage('Invalid email format'),

 //validate password
  body('Password')
  .exists()
  .withMessage('Password is required')
  .isLength({ min: 6 }).withMessage('Password must be at least 6 characters long'),

  //validate PhoneNumber
  body('PhoneNumber')
    .exists()
    .withMessage('Phone number is required')
    .matches(/^\+212\d{9}$/)
    .withMessage('Invalid phone number format'),
  
  
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  }
];
