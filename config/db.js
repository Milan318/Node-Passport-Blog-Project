const { default: mongoose } = require("mongoose")

const db = async()=>{
    try {
        await mongoose.connect('mongodb+srv://milanmandaviya7495:12345@cluster0.gswuxkt.mongodb.net/Passport');
        console.log("database connected.");
        
    } catch (error) {
        console.log(error.message);        
    }
}

module.exports = db;