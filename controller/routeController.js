const dataProcessorService = require('../services/dataProcessorService');


exports.processData = (req, res, next) => {
    try {
        const data = req.body.data;

        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                user_id: "jane_doe_29072025",
                error: "Invalid request format. 'data' key with an array is required."
            });
        }

        const processedData = dataProcessor.process(data);

        const response = {
            is_success: true,
            user_id: "jane_doe_29072025",
            email: "jane.doe@example.com",
            roll_number: "JD12345",
            ...processedData
        };

        return res.status(200).json(response);

    } catch (error) {
        next(error);
    }
};
