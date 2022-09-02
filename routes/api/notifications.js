const express = require('express')
const router = express.Router()
const Notifications = require('../../model/Notification.js')



// Submit Assignment
router.post('/add-notification', (req, res) => {

    let { ntitle, nlink, ndate} = req.body
    
    let newNotification = new Notifications({
        ntitle,
        nlink,
        ndate
        
    })
    newNotification.save().then(notification=>{
        return res.status(201).json({
            success:true,
            msg:'Notification Added'
        })
    })


})


// Get Notification List
router.get('/get-notification',(req, res)=>{
  
    Notifications.find({},
        function (err, notification) {
            if (err){
                return res.json({msg:'something went wrong'})
                }
                else{
                res.json(notification)
                }
            })
})

// Delete Notification
router.delete('/delete-notification',(req, res) => {
    let { _id } = req.body
    Notifications.findOneAndDelete({ 
    _id: _id  },
    function (err) {
    if (err){
            console.log(err);
        }
        else{
        res.status(200).json({msg:'Notification deleted'})
        }
    });
})

// Update Notification
router.patch('/update-notification', (req, res) => {

    const id = req.body._id
    Notifications.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
        }else{
            res.status(200).send({message:"Notification updated"})
        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })



})
module.exports = router