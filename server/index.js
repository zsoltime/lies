'use strict';

const app = require('./app');

const server = app.listen(app.get('port'), () => {
  // eslint-disable-next-line no-console
  console.log(
    'The API is running on http://localhost:%s',
    server.address().port
  );
});

module.exports = server;
