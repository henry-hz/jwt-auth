

exports.get = {
  auth: {
    strategy: 'token',
    scope: ['admin', 'merchant']
  },
  handler: function (request, reply) {
    // console.Log('payments', request.auth.credentials);
    reply(payment);
  }
}


var payment = {
  "count": 16,
  "start": 0,
  "limit": 4,
  "docs": [
    {
      "amount": 1500,
      "merchantId": 358244475768,
      "productId": 715593278454,
      "reference": 324494168069,
      "status": "COMPLETED",
      "meta": {
        "updated_at": "2014-04-10T14:14:21.503Z",
        "created_at": "2014-04-10T14:14:09.000Z"
      },
      "payment": {
        "method": "CPA",
        "tries": 1,
        "success": true
      },
      "description": "treseksten",
      "invoice": "1017",
      "fee": 300,
      "shipping": 0,
      "currency": "NOK",
      "type": "DONATION"
    },
    {
      "amount": 200,
      "cancelReason": "A new order has been started",
      "merchantId": 483818462514,
      "productId": 535092638945,
      "reference": 765160255460,
      "status": "CANCELLED",
      "meta": {
        "updated_at": "2014-04-10T14:14:08.977Z",
        "created_at": "2014-04-10T13:32:35.692Z"
      },
        "payment": {
        "method": "CARD",
        "tries": 1,
        "success": false
      },
      "description": "Cat",
      "invoice": "1032",
      "fee": 300,
      "shipping": 0,
      "currency": "NOK",
      "type": "CAMPAIGN"
    },
    {
      "amount": 1000,
      "cancelReason": "",
      "merchantId": 358244475768,
      "productId": 715593278454,
      "reference": 484079614328,
      "status": "COMPLETED",
      "meta": {
        "updated_at": "2014-04-10T13:22:03.716Z",
        "created_at": "2014-04-10T13:21:41.301Z"
      },
      "payment": {
        "method": "CPA",
        "tries": 1,
        "success": true
      },
      "description": "treseksten",
      "invoice": "1016",
      "fee": 300,
      "shipping": 0,
      "currency": "NOK",
      "type": "DONATION"
    },
    {
      "amount": 3000,
      "cancelReason": "No payment method available",
      "merchantId": 869195647002,
      "productId": 575646836683,
      "reference": 349157478520,
      "status": "CANCELLED",
      "meta": {
        "updated_at": "2014-04-10T13:19:51.163Z",
        "created_at": "2014-04-10T13:19:51.129Z"
      },
      "payment": {
        "cpaError": 2,
        "tries": 0,
        "success": false
      },
      "description": "Donation",
      "invoice": "1024",
      "fee": 300,
      "shipping": 0,
      "currency": "NOK",
      "type": "DONATION"
    }
  ]
}
