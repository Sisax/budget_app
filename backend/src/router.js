const heartbeatController = require('./controllers/heartbeatController');
const itemsController = require('./controllers/itemsController');

const route = (app) => {
  app.use('/api/heartbeat', heartbeatController);
  app.use('/api/items', itemsController);
};

module.exports = { route };