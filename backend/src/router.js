const heartbeatController = require('./controllers/heartbeatController');
const usersController = require('./controllers/usersController');
const itemsController = require('./controllers/itemsController');

const route = (app) => {
  app.use('/api/heartbeat', heartbeatController);
  app.use('/api/users', usersController);
  app.use('/api/items', itemsController);
};

module.exports = { route };