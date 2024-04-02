const verifyRoles = (...allowedRoles) => {
  return (req, res, next) => {
    if (!req){
      return res.status(401).send('error')
    }
    const rolesArray = [...allowedRoles]
    const result = rolesArray.includes(req.user.role)
    if (!result) {
      return res.status(401).send('unothorized')
    }
    next()
  }
}

module.exports = verifyRoles