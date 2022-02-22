'use strict';

const contentTypeInvoice = require('./invoice');
const invoiceItem = require('./invoice-item');
const paymentCallback = require('./payment-callback');
const paymentChannel = require('./payment-channel');
const paymentCode = require('./payment-code');
const paymentGateway = require('./payment-gateway');

module.exports = {
  'invoice': { schema: contentTypeInvoice },
  'invoice-item': { schema: invoiceItem },
  'payment-callback': { schema: paymentCallback },
  'payment-channel': { schema: paymentChannel },
  'payment-code': { schema: paymentCode },
  'payment-gateway': { schema: paymentGateway }
};