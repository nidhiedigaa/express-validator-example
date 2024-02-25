const {body}=require('express-validator')


const validation=[
    body('username')
    .trim()
    .isLength({min:3})
    .withMessage('username should have atleast 3 characters'),
    body('password')
    .isLength({min:3})
    .withMessage('username should have atleast 3 characters'),
    body('email')
    .isEmail()
    .withMessage('invalid email address')
]

module.exports=validation