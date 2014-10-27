var faker = require('faker');

exports.get = {
  auth: {
    strategy: 'token',
    scope: ['admin', 'merchant']
  },
  handler: function (request, reply) {
     var user = faker.helpers.userCard();
     user.avatar = faker.image.avatar();
     reply(user);
  }
}
