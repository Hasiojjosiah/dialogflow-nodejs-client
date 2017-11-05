var apiai = require('apiai');

var app = apiai("b9b76ec3b535472f8802d1d36ec4bee8");

var request = app.textRequest('Josiah', {
    sessionId: '<unique session id>'
});

request.on('response', function(response) {
    console.log(response);
});

request.on('error', function(error) {
    console.log(error);
});

request.end();
