const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    id:{
        type:Number,
        required: true
    },
    first_name:{
        type:String,
    },
    last_name:{
        type:String,
    },
    email:{
        type:String,
    },
    gender:{
        type:String,
    },
    income:{
        type:String,
    },
    city:{
        type:String,
    },
    car:{
        type:String,
    },
    quote:{
        type:String,
    },
    phone_price:{
        type:String,
    },
});


const Sample = mongoose.model('samples', dataSchema);
module.exports = Sample;