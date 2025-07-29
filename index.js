const express = require('express');
const bodyParser = require('body-parser');
const bfhlRoute = require('./routes/bfhl');

const app = express();
const PORT = 3000;

app.use(bodyParser.json());

app.get('/', (req, res) => {
    res.status(200).send('OK');
});
app.use('/bfhl', bfhlRoute);

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        user_id: "pratyush_kumar_15052005",
        error: "An internal server error occurred."
    });
});

app.listen(3000, () => {
    console.log(`Server is running on ${PORT}`);
});