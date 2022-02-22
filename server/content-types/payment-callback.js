module.exports = {
    info: {
        tableName: 'payment-callback',
        singularName: 'payment-callback', // kebab-case mandatory
        pluralName: 'payment-callbacks', // kebab-case mandatory
        displayName: 'Payment callback',
        description: 'Store payment callback from gateway provider',
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
        payment_gateway_vendor: {
            type: "string"
        },
        transaction_id: {
            type: "string"
        },
        status: {
            type: "enumeration",
            enum: [
                "failed",
                "reversal",
                "expired",
                "active",
                "success",
                "settlement"
            ]
        },
        invoice: {
            type: "relation",
            relation: "manyToOne",
            target: "plugin::payment.invoice",
            inversedBy: "payment_callbacks"
        },
        raw_data: {
            type: "json"
        },
        transaction_timestamp: {
            type: "string"
        },
        payment_code: {
            type: "relation",
            relation: "oneToOne",
            target: "plugin::payment.payment-code"
        }
    }
};
