const mongoose = require('mongoose');
module.exports = async () => {
    try{
    await mongoose.connect(process.env.DB_URI)
    console.log('Database connected successfully')
    }
    catch(error){
        console.log(`Error connecting to database ${error.message}`)
        process.exit(0)
    }
}