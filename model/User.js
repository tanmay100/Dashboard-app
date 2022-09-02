const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:{
        type:String,
        required: true
    },
    username:{
        type:String,
        unique:true,
        required: true
    },
    email:{
        type:String,
        unique:true,
        required: true
    },
    password:{  
        type:String,
        required: true
    },
    role:{
        type:String,
        default:'student'

    }
})


module.exports = User = mongoose.model('users', UserSchema)