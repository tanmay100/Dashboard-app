const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const NotificationSchema = new Schema({
    ntitle:{
        type:String,
        required: true
    },
    nlink:{
        type:String,

    },
    ndate:{
        type:Date,
        default:Date("<YYYY-mm-dd>")
    }

})


module.exports = Notification = mongoose.model('notification', NotificationSchema)