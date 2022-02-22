'use strict';

module.exports = {
  index(ctx) {
    ctx.body = strapi
      .plugin('sawala-payment')
      .service('myService')
      .getWelcomeMessage();
  },
};
