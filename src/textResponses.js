const hello = 'helo worl';

const getTimeString = () => {
  const d = new Date();
  const dateString = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
  return dateString;
};

const getTime = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain' });
  response.write(getTimeString());
  response.end();
};

const getHello = (request, response) => {
  response.writeHead(200, { 'content-type': 'text/plain' });
  response.write(hello);
  response.end();
};

module.exports = {
  hello,
  getTimeString,
  getHello,
  getTime,
};
