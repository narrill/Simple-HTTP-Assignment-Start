const fs = require('fs');

const spongegar = fs.readFileSync(`${__dirname}/../client/spongegar.png`);

const getImage = (request, response, image) => {
  response.writeHead(200, { 'content-type': 'image/png' });
  response.write(image);
  response.end();
};

module.exports = {
  getSpongegar: (request, response) => {
    getImage(request, response, spongegar);
  },
};
