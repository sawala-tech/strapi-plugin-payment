module.exports = {
    info: {
        tableName: 'payment-gateway',
        singularName: 'payment-gateway', // kebab-case mandatory
        pluralName: 'payment-gateways', // kebab-case mandatory
        displayName: 'Payment gateway',
        description: 'List of payment gateway',
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
        name: {
            type: "string"
        },
        client_id: {
            type: "string",
            required: true,
            unique: true
        },
        client_secret: {
            type: "string",
            required: true,
            unique: true
        },
        type: {
            type: "enumeration",
            enum: [
                "staging",
                "production"
            ]
        },
        merchant_id: {
            type: "string"
        }
    }
};
