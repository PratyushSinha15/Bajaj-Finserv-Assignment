const express = require('express');
const bodyParser = require('body-parser');
const bfhl = require('./routes/bfhl');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('OK');
});
app.use('/bfhl', bfhlRoutes);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        user_id: "jane_doe_29072025",
        error: "An internal server error occurred."
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on ${PORT}`);
});