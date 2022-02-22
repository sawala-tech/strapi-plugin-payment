module.exports = {
    info: {
        tableName: 'payment-code',
        singularName: 'payment-code', // kebab-case mandatory
        pluralName: 'payment-codes', // kebab-case mandatory
        displayName: 'Payment codes',
        description: 'Store payment codes from gateway provider',
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
        invoice: {
            type: "relation",
            relation: "manyToOne",
            target: "plugin::payment.invoice",
            inversedBy: "payment_codes"
        },
        status: {
            type: "enumeration",
            enum: [
                "active",
                "expired"
            ]
        },
        bank_code: {
            type: "string",
            required: true
        },
        payment_gateway_vendor: {
            type: "string",
            required: true
        },
        account_number: {
            type: "string"
        },
        status_from_payment_gateway: {
            type: "string"
        },
        raw_data: {
            type: "json"
        },
        description: {
            type: "text"
        },
        amount: {
            type: "float"
        },
        channel_name: {
            type: "string"
        }
    }
};
