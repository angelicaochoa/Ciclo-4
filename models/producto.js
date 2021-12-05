const { Schema, model} = require('mongoose');

 const productoSchema = new Schema({
     nombre: {type: String, required: true},
     categoria: {type: String, required: true},
     precio: {type: String, required: true},

 },{
     timestamps: true,
     versionKey: false
 })

 module.exports = model('producto', productoSchema)