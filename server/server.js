require('dotenv').config()
require('./db/db')()
require('./bot/bot')
const App = require('express')()





App.listen(process.env.PORT, () => {
    console.log('listen 3000 port');
})