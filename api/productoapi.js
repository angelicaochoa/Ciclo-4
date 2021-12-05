const { Router } = require('express');
const router = Router();
const productos = require('../controllers/productocontrollers')
const verify = require('../middlewares/autjwt')

router.get('/', productos.listarproductos);
//router.post('/', [verify.verify, verify.isiadministrador], productos.Crearproductos); // primero debe verificar tipo el usuario
router.post('/add', productos.Crearproductos);
router.get('/:id', productos.listarproductos);
router.put('/:id', productos.Actualizarproductos);
router.delete('/:id', productos.Eliminarproducto);
// router.put('/:id',[verify.verify, verify.isiadministrador], productos.Actualizarproductos);
// router.delete('/:id',[verify.verify, verify.isiadministrador], productos.Eliminarproducto);




module.exports = router;
