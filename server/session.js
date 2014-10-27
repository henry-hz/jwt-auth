var Boom = require('boom');
var Jwt  = require('jsonwebtoken');
var privateKey = '37LvDSm4XvjYOh9Y';
// Credentials

var merchant = {
  merchantId: 406528,
  scope: ['merchant']
};
var admin = {
  scope: ['admin']
};


var credentials = {
  admin: '12345',
  unicef: 'unicef',
};

// Get session information endpoint

exports.login = {
    handler: function (request, reply) {

    if(!credentials[request.payload.user]) {
      return reply(Boom.unauthorized("login failed"));
    }
    
    if(credentials[request.payload.user] !== request.payload.pass) {
      return reply(Boom.unauthorized("login failed"));
    }

    var res;
    if(request.payload.user === 'admin') {
      res = {
        user: request.payload.user,
        scope: 'admin',
        token: Jwt.sign(admin, privateKey)
      };
    }
    else {
      res = {
        user: request.payload.user,
        merchantId: merchant.merchantId,
        scope: 'merchant',
        token: Jwt.sign(merchant, privateKey),
      };
    }
    reply(res);
  }
};
