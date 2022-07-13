const express = require('express')
const app = express() 

require('dotenv').config()
const PORT = process.env.PORT || 8000;

// middleware מובנה
app.use(express.json())

// middleware:
const loggerMiddleWare = (req, res, next) => {
    console.log(`User did the method: ${req.method}`)
    next();
}
app.use(loggerMiddleWare)

const users = require('./routes/users')
app.use('/api/users', users)

app.get('*', (req, res) => {
    res.send('Page 404: Error');
});

app.listen(PORT, () => console.log((`Server started on Port ${PORT}`))); 