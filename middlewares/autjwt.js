const jwt = require('jsonwebtoken')
const config = require('../configuracion');
const user = require('../models/user');
const Role = require('../models/rol');

const verifyToken = {};
verifyToken.verify = async (req,res,next)=>{
    try{
        
        const Token = req.headers["x-access-token"] // solicita un toquen por el heders
        if(!Token) return res.status(403).json({message:'no token provided'});// si no se envia el token reterno no token providen si
        const decoded = jwt.verify(Token,config.secret);// verifica el toquen y devuelve el _id del token
        req.userId = decoded.id
        const User = await user.findById(req.userId,{password : 0} )
        if(!User) return res.status(404).json({message:'no user found'})

        
        next()
    }catch(err){
        return res.status(401).json({message: "usuario invalido"})
    }
}

verifyToken.isEstudiante = async(req,res,next) =>{
    const User =  await user.findById(req.userId)
    const Roles = await Role.find({_id: {$in: User.roles}})
    console.log(Roles[0].name)
    if(Roles[0].name != "usuario") return res.json({message:'permiso denegado'})

    next()
}


module.exports = verifyToken