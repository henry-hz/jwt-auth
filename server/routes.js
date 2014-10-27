// Load modules

var Static    = require('./static');
var Session   = require('./session');
var Payments  = require('./payments');
var Customers = require('./customers'); 
var Random    = require('./random-user');

// API Server Endpoints

exports.endpoints = [
    { method: 'GET',  path: '/{somethingss*}', config: Static.get },
    { method: 'GET',  path: '/payments',       config: Payments.get},
    { method: 'GET',  path: '/customers',      config: Customers.get},
    { method: 'POST', path: '/login',          config: Session.login},
    { method: 'GET',  path: '/random-user',    config: Random.get}
];
