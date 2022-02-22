const clientRoutes = require('./client');

module.exports = {
  'content-api': {
    type: 'content-api',
    routes: clientRoutes,
  }
};
