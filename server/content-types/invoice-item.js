module.exports = {
  info: {
    tableName: 'invoice-item',
    singularName: 'invoice-item', // kebab-case mandatory
    pluralName: 'invoice-items', // kebab-case mandatory
    displayName: 'Item invoice',
    description: 'Store invoice items',
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
    item_name: {
      type: 'string',
      required: true
    },
    item_description: {
      type: 'string',
      required: false
    },
    item_qty: {
      type: 'integer',
      required: true
    },
    item_price: {
      type: 'float',
      required: true
    },
    item_total_price: {
      type: 'float',
      required: true
    },
    product_id: {
      type: 'string',
      required: false
    },
    invoice: {
      type: "relation",
      relation: "manyToMany",
      target: "plugin::payment.invoice",
      inversedBy: "invoice_items"
    },
    user: {
      type: "relation",
      relation: "oneToOne",
      target: "plugin::users-permissions.user",
      configurable: false,
    }
  }
};
