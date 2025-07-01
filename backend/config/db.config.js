const mongoose = require('mongoose');
require('dotenv').config()

try{
    const connectDb = mongoose.connect(process.env.MONGO_URI,()=>{
    console.log('database connected successfully')
});
}catch(err){
    console.error('database error: ',err);
};

module.exports = connectDb;