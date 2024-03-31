const { bot } = require('../bot')
const User = require('../../models/User')
const { start, requestContact, getName, isDriver, getCarName, getCarNumber } = require('../helper/start')

bot.on('message', async msg => {

    const chatId = msg.from.id
    const text = msg.text
    const user = await User.findOne({ chatId }).lean()

    if(text === '/start') {
        start(msg)
    }

    if(user) {
        if(user.action === 'request_contact' && !user.phone) {
            requestContact(msg)
        }
        if(user.action === 'name' && !user.name) {
            getName(msg)
        }
        if(user.action === 'car-name' && !user.carName) {
            getCarName(msg)
        }
        if(user.action === 'car-number' && !user.carNumber) {
            getCarNumber(msg)
        }
    }
})

bot.on('callback_query', async (query) => {
    const chatId = query.from.id
    const user = await User.findOne({ chatId }).lean()

    if(user.action === 'driver' && !user.driver) {
        isDriver(query)
    }
})