module.exports = {
    info: {
        tableName: 'payement-gateway',
        singularName: 'payement-gateway', // kebab-case mandatory
        pluralName: 'payement-gateways', // kebab-case mandatory
        displayName: 'Payment Gateway',
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
