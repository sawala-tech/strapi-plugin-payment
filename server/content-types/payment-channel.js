module.exports = {
    info: {
        tableName: 'payment-channel',
        singularName: 'payment-channel', // kebab-case mandatory
        pluralName: 'payment-channels', // kebab-case mandatory
        displayName: 'Payment channel',
        description: 'List of payment channel',
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
        channel_name: {
            type: "string"
        },
        description: {
            type: "string"
        },
        payment_gateway: {
            type: "relation",
            relation: "oneToOne",
            target: "plugin::payment.payment-gateway"
        },
        settings: {
            type: "json"
        }
    }
};
