module.exports = {
  info: {
    tableName: 'payment-invoice',
    singularName: 'payment-invoice', // kebab-case mandatory
    pluralName: 'payment-invoices', // kebab-case mandatory
    displayName: 'Invoice',
    description: 'Store invoice transaction',
    kind: 'collectionType',
  },
  options: {
    draftAndPublish: false,
  },
  pluginOptions: {
    'content-manager': {
      visible: true,
    },
    'content-type-builder': {
      visible: true,
    }
  },
  attributes: {
    invoice_number: {
      type: 'string',
      min: 1,
      max: 50,
      configurable: false,
      unique: true,
      required: true
    },
    invoice_date: {
      type: 'datetime',
      required: true
    },
    invoice_due_date: {
      type: 'datetime',
      required: true
    },
    invoice_items: {
      type: "relation",
      relation: "manyToMany",
      target: "plugin::sawala-payment.invoice-item",
      inversedBy: "invoice"
    },
    customer_name: {
      type: 'string',
      required: true
    },
    customer_email: {
      type: 'email',
      required: true
    },
    customer_handphone: {
      type: 'string',
      required: true
    },
    customer_address: {
      type: 'string',
      required: false
    },
    user: {
      type: "relation",
      relation: "oneToOne",
      target: "plugin::users-permissions.user",
      configurable: false,
    }

  }
};
