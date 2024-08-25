const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware for parsing JSON
app.use(bodyParser.json());

// POST endpoint
app.post('/bfhl', (req, res) => {
    try {
        const data = req.body.data;
        const numbers = data.filter(item => !isNaN(item));
        const alphabets = data.filter(item => isNaN(item) && /[a-zA-Z]/.test(item));
        const highestLowercase = alphabets.filter(char => char === char.toLowerCase()).sort().pop();

        res.json({
            is_success: true,
            user_id: "john_doe_17091999", // This should be dynamic based on actual user data
            email: "john@xyz.com",
            roll_number: "ABCD123",
            numbers,
            alphabets,
            highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
        });
    } catch (error) {
        res.status(500).json({
            is_success: false,
            message: "Error processing request"
        });
    }
});

// GET endpoint
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

