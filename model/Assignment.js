const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const AssignmentSchema = new Schema({
    acode:{
        type:String,
        required: true
    },
    aheading:{
        type:String,
        required: true
    },
    adesc:{
        type:String,
        
    },
    alink:{
        type:String,
        required: true
    }

})


module.exports = Assignment = mongoose.model('assignments', AssignmentSchema)