const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const SubmissionsSchema = new Schema({
    acode:{
        type:String,
        required: true
    },
    aheading:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required: true
    },
    // assignment ans link
    aslink:{
        type:String,
        required: true
    },
    comments:{
        type:String,
        default:'NA'

    },
    date:{
        type:Date,
        default:Date("<dd-mm-YYYY>")
    },
    marks:{
        type:String,
        default:'NA'
    }

})


module.exports = Submissions = mongoose.model('submissions', SubmissionsSchema)