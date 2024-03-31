const mongoose = require('mongoose')

async function connectdb() {
    await mongoose.connect('mongodb://127.0.0.1:27017/viloyat-taxi').then(() => {
        console.log('Connect db');
    }).catch(() => {
        console.log('Error db');
    })
}


module.exports = connectdb