const mongoose = require('mongoose');
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');

const createRoles = require('./lib/IniSetap')

const app = express();
createRoles.createRoles();
const productoRoute = require('./api/productoapi');
const autRoute = require('./api/autapi');
const usersRoute = require('./api/usersapi')

app.set('port',process.env.PORT || 4000);

app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use("/api/productos",productoRoute);
app.use("/api/auth",autRoute);
app.use("/api/user",usersRoute)



module.exports = app;




