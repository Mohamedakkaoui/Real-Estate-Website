const xss = require ('xss')

exports.Sanitize = (req,res,next) => {
    const fields = ['FirstName','LastName','Username','Email','Password','PhoneNumber','Role','ProfilePic','OwnerId']
    for(i in fields) {
        if(req.body[fields[i]]) {
            req.body[fields[i]] = xss(req.body[fields[i]])
        }
    }
    next()
}
