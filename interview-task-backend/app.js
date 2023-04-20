const chatRoute = require('./routes/chat');
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/chat', chatRoute);

app.listen(3000, () => {
    console.log('Server started on port 3000');
});