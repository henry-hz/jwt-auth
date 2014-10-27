
var Hapi = require('hapi');
var Jwt  = require('hapi-auth-jwt');
var Moment = require('moment');
var Routes = require('./routes');

var port = process.env.PORT || 8000;


var privateKey = '37LvDSm4XvjYOh9Y';
var ttl = 1*60*60*1000;   // 1 Hour




var server = Hapi.createServer('0.0.0.0', port, {cors: true});

// Validate function to be injected 
var validate = function (token, callback) {
  // console.log('token', token);
  // Check token timestamp
  var diff = Moment().diff(Moment(token.iat*1000));
  if(diff > ttl) {
    return callback(null, false);
  }
  callback(null, true, token);
};
// Plugins
server.pack.register(Jwt , function (err) {
  server.auth.strategy('token', 'jwt', { validateFunc: validate, key: privateKey });
  // Point to routes
  server.route(Routes.endpoints);
});




// Start
server.start(function () {
  console.log('Server started ', server.info.uri);
});
