module.exports = {
    info: {
        tableName: 'payement-channel',
        singularName: 'payement-channel', // kebab-case mandatory
        pluralName: 'payement-channels', // kebab-case mandatory
        displayName: 'Payment Channel',
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
