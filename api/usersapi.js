const User = require('../controllers/userscontrollers');
const express = require('express');
const router = express.Router();

// router.get("/all", usercontrollers.buscarZapato);
// router.get("/:id", usercontrollers.buscarporid);
// router.post("/add", usercontrollers.addzapato);
// router.put("/:id", usercontrollers.actualizarid);
// router.delete("/add", usercontrollers.eliminarzapato );


// Exportar
router.get('/', User.listarUser);

module.exports = router;