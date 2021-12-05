const mongoose = require('mongoose');
const producto = require('../models/producto')

const productos = {}

//filtrar la lista de productos
productos.listarproductos = async (req,res)=>{
    const cursodb = await producto.findById(req.params.id)
    res.send(cursodb)

};
//listar la lista de productos
productos.listarproductos = async (req,res)=>{
    const productodb = await producto.find()
    res.json(productodb)
};
// crear un nuevo producto
productos.Crearproductos = async(req,res)=>{
    const newProducto = new producto(req.body)
    await newProducto.save()
    res.send({message: 'producto creado'})
};
//actualizar el producto
productos.Actualizarproductos = async(req,res)=>{
     await producto.findByIdAndUpdate(req.params.id, req.body)
     res.json({status: 'producto actualizado'})

};
//eliminar el producto
productos.Eliminarproducto = async (req,res)=>{
    producto.findByIdAndDelete(req.params.id)
    res.json({status: 'producto eliminado'})
};

//agregar 

productos.agregarproducto = async (req,res) =>{
    
}


module.exports = productos;
