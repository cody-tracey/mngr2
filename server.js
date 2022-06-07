const express = require('express'),
    port = process.env.PORT || 5000,
    cors = require('cors');
const APP = express();

APP.use(cors());

APP.get('/api/greeting', (req, res) => {
    res.status(200).json({ greeting: 'hello' });
});

APP.listen(port, () => console.log(`Server running on ${port} => 🌎`));