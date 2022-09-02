const express = require('express')
const router = express.Router()
const Submissions = require('../../model/Submissions')
const key = require('../../config/keys').secret

// Submit Assignment
router.post('/submit-assignment', (req, res) => {

    let { acode, aheading, username, aslink, comments } = req.body
    
    let newSubmission = new Submissions({
        acode,
        aheading,
        username,
        aslink,
        comments
        
    })
    newSubmission.save().then(assignment=>{
        return res.status(201).json({
            success:true,
            msg:'Assignment Submited'
        })
    })


})


// Get Assignment list for student by username
// router.get('/get-submitted-assignment',(req, res)=>{
    
//     let username = req.body.username
    
//     Submissions.find({username:username} ,
//         function (err, data) {
//             if (err){
//                 return res.json({msg:'something went wrong'})
//                 }
//                 else{
//                 res.json(data)
//                 }
//             })
// })

router.get(`/get-submitted-assignment`,(req, res)=>{
    
    let username = req.query.username
    
    Submissions.find({username:username},
        function (err, data) {
            if (err){
                return res.json({msg:'something went wrong'})
                }
                else{
                res.json(data)
                }
            })
})





// Delete Submitted Assignment By Student by _id
router.delete('/delete-submitted-assignment',(req, res) => {
    let { _id } = req.body
    Submissions.findOneAndDelete({ 
    _id: _id  },
    function (err) {
    if (err){
            console.log(err);
        }
        else{
        res.status(200).json({msg:'Submitted Assignment deleted'})
        }
    });
})


// Teacher 
// get assignments by given acode for teacher
router.get('/get-students-by-acode',(req, res)=>{
    
    let acode = req.query.acode
    Submissions.find({acode:acode},
        function (err, data) {
            if (err){
                return res.json({msg:'something went wrong'})
                }
                else{
                res.json(data)
                }
            })
})


// Update marks by teacher
router.patch('/evaluate-marks', (req, res) => {

    const id = req.body._id
    Submissions.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
    .then(data => {
        if(!data){
            res.status(404).send({ message : `Cannot Update marks with ${id}. Maybe user not found!`})
        }else{
            res.status(200).send({message:"Marks Updated"})
        }
    })
    .catch(err =>{
        res.status(500).send({ message : "Error Update user information"})
    })



})



module.exports = router