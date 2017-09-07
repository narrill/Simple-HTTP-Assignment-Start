const text = require('./textResponses.js');

const getMessage = (request, response, message) => {
  const objectMessage = {
    message,
  };
  const stringMessage = JSON.stringify(objectMessage);

  response.writeHead(200, { 'content-type': 'application/json' });
  response.write(stringMessage);
  response.end();
};

module.exports = {
  getHelloJSON: (request, response) => {
    getMessage(request, response, text.hello);
  },
  getTimeJSON: (request, response) => {
    getMessage(request, response, text.getTimeString());
  },
};
