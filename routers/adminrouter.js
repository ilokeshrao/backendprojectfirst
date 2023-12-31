const router= require('express').Router()
const regc= require('../controllers/regcontroller')
const bannerc= require('../controllers/bannercontroller')
const servicec= require('../controllers/servicecontroller')
 const testic= require('../controllers/testicontroller')
  const queryc  =require('../controllers/querycontroller')
  const addc =require('../controllers/addcontroller')
 const upload= require('../helpers/multer')
function handlelogin(req,res,next){
    if(req.session.isAuth){
        next()
    }else{
        res.redirect('/admin/')
    }
}


router.get('/',regc.loginpage)
router.post('/',regc.logincheck)
router.get('/dashboard',handlelogin,regc.dashboard)
router.get('/logout',regc.logout)
router.get ('/banner',handlelogin,bannerc.bannerpage)
router.get('/bannerupdateform/:id',handlelogin,bannerc.bannerform)
router.post('/bannerupdateform/:id',upload.single('img'),bannerc.bannerupdate)
router.get('/service',handlelogin,servicec.servicepage)
router.get('/addservice',handlelogin,servicec.serviceform)
router.post('/addservice',upload.single('img'),servicec.serviceadd)
router.get('/servicedelete/:id',handlelogin,servicec.servicedelete)
router.get('/servicestatusupdate/:id',handlelogin,servicec.servicestatusupdate)
router.get('/testi',handlelogin,testic.testipage)
router.post('/testi',testic.search)
router.get('/testistatusupdate/:id',handlelogin,testic.testistatusupdate)
router.get('/testidelete/:id',handlelogin,testic.testidelete)
router.get('/query',handlelogin,queryc.querypage)
router.get('/queryreply/:id',handlelogin,queryc.emailpage)
router.post('/queryreply/:id',upload.single('attachement'),queryc.sendmail)
router.post('/service',handlelogin,servicec.search)
router.get('/emaildelete/:id',handlelogin,queryc.deleteemail)
router.get('/address',addc.addaddress)
router.get('/addupdate/:id',addc.updateform)
router.post('/addupdate/:id',addc.addupdate)


module.exports= router
  