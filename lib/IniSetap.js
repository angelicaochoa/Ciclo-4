const Role = require('../models/rol');

createroles = {}
 createroles.createRoles = async() =>{
try{

  const count =  await Role.estimatedDocumentCount()

  if(count > 0) return;

  const value = await Promise.all([
    new Role({name: 'usuario'}).save(),
    new Role({name: 'administrador'}).save()
  ])
  
  console.log(value)
  } catch (err){
      console.log(err)
  }
}

module.exports = createroles