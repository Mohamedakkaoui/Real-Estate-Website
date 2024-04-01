const xss = require ('xss')

exports.Sanitize = (req,res,next) => {
    const fields = ['title','description','category','listingType','location','price','size','images','owner']
    for(i in fields) {
        if(req.body[fields[i]]) {
            req.body[fields[i]] = xss(req.body[fields[i]])
        }
    }
    next()
}
