function classifyQuery(message) {

    const text = message.toLowerCase();

    if (
        text.includes("available") ||
        text.includes("availability")
    ) {
        return "pre_sales_availability";
    }

    if (
        text.includes("rate") ||
        text.includes("price") ||
        text.includes("cost")
    ) {
        return "pre_sales_pricing";
    }

    if (
        text.includes("check in") ||
        text.includes("wifi")
    ) {
        return "post_sales_checkin";
    }

    if (
        text.includes("airport transfer") ||
        text.includes("early check")
    ) {
        return "special_request";
    }

    if (
        text.includes("not happy") ||
        text.includes("ac is not working") ||
        text.includes("complaint")
    ) {
        return "complaint";
    }

    return "general_enquiry";
}

export default classifyQuery;