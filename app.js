const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const path = require('path')
const cors = require('cors')
const passport = require('passport')

// Intialising the app
const app = express()

//Middleware
//form data middleware
app.use(bodyParser.urlencoded({
    extended:false
}))
//json body middleware
app.use(bodyParser.json())

//cors middleware
app.use(cors())

//static directory
app.use(express.static(path.join(__dirname,'public')))

//Using passport middleware
app.use(passport.initialize())
require('./config/passport')(passport)


//Bringing up the database
const db = require('./config/keys').mongoURI
mongoose.connect(db, {useNewURLParser:true
}).then(()=>{
    console.log(`db connected ${db}`);
}).catch(err=>{
    console.log(`unable to connect ${err}`);
})

// Student & Teacher CRUD
const users = require('./routes/api/users')
app.use('/api/users',users)


//Add Assignment Que CRUD
const assignments = require('./routes/api/assignments')
app.use('/api/assignments',assignments)

// Submit Ans By Student CRUD
const submissions = require('./routes/api/submissions')
app.use('/api/submissions',submissions)

// Notifications CRUD
const notifications = require('./routes/api/notifications')
app.use('/api/notifications',notifications)

// Added for deployment
if(process.env.Node_ENV === 'production'){
    app.use(express.static(__dirname+'/dist/'))
    app.get('*',(req,res)=>{
        res.sendFile(__dirname + "/dist/index.html")
    })
}


const PORT =  process.env.PORT || 5000
app.listen(PORT, ()=>{
console.log(`server start on port ${PORT}`);
})

