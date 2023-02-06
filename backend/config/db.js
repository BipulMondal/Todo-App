const mongoose = require ("mongoose")

const connectToDB = () => {
    mongoose.connect(process.env.MONGO_URL)
    .then((conn) => {
        console.log(`Connected to DB : ${conn.connection.host}`)
    })
    .catch((err) => {
        console.log(`DB connection failed`)
        console.log(err.message)
        process.exit(1)
    })
}

module.exports = connectToDB