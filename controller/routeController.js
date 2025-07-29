const dataProcessor = require('../services/dataProcessor');


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
            user_id: "pratyush_kumar_15052005",
            email: "pratyush2082.be22@chitkara.edu.in",
            roll_number: "2210992082",
            ...processedData
        };

        return res.status(200).json(response);

    } catch (error) {
        next(error);
    }
};
