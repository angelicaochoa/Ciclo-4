const { Router } = require('express');
const router = Router();
const usersAuth = require('../controllers/autcontrollers')


router.post('/login',usersAuth.login);
router.post('/register',usersAuth.register);



module.exports = router;
