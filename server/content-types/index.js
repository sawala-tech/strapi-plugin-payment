'use strict';

const contentTypeInvoice = require('./invoice');
const invoiceItem = require('./invoice-item');

module.exports = {
  'payment-invoice': { schema: contentTypeInvoice },
  'invoice-item': { schema: invoiceItem }
};
