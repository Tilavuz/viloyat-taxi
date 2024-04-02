require('dotenv').config()
require('./db/db')()
require('./bot/bot')
const app = require('express')()
app.use(require('cors')())
app.use(require('express').json())
const userRouter = require('./routers/user')


app.use('/api', userRouter)


app.listen(process.env.PORT, () => {
    console.log('listen 3000 port');
})