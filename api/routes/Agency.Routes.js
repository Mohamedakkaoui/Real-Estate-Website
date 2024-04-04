//initiating express
const express = require ('express')
const AgencyRoute = express.Router()



//importing controllers &Middlewares
const {GetAllAgencies,
      CreateAgency,
      DeleteAgency,
      GetAgencyByID,
      UpdateAgency
} = require ('../controllers/Agency.Controllers')
const { ListingPicsUpload } = require('../middlewares/multer')
const { isAuthenticated } = require('../middlewares/authMiddlewares')
const { IsOwner } = require ('../middlewares/IsOwner.js')


//setting limit for upload
const ImagesInfo = require('../config/constants')
const verifyRoles = require('../middlewares/roles.js')
const ROLES_LIST = require('../config/Roles_Lists.js')

//defining routes
AgencyRoute.route('/:id')
.get('/:id', isAuthenticated, GetAgencyByID)
.delete('/:id', isAuthenticated, DeleteAgency)

AgencyRoute.get('/', GetAllAgencies)
AgencyRoute.post('/add', isAuthenticated, ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), CreateAgency)
AgencyRoute.patch('/update/:id',isAuthenticated, ListingPicsUpload.array('images', ImagesInfo.Max_file_to_Upload), UpdateAgency)