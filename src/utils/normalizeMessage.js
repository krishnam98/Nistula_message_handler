const { v4: uuidv4 } = require("uuid");

function normalizeMessage(payload, queryType) {
    return {
        message_id: uuidv4(),
        source: payload.source,
        guest_name: payload.guest_name,
        message_text: payload.message,
        timestamp: payload.timestamp,
        booking_ref: payload.booking_ref,
        property_id: payload.property_id,
        query_type: queryType
    };
}

module.exports = normalizeMessage;