const express = require('express')
const router = express.Router()
const Assignment = require('../../model/Assignment')
const key = require('../../config/keys').secret


// Add Assignment

router.post('/add-assignment', (req, res) => {

    let { acode, aheading, adesc, alink } = req.body
    //Add Assignment
    let newAssignment = new Assignment({
        acode,
        aheading,
        adesc,
        alink
        
    })
    newAssignment.save().then(assignment=>{
        return res.status(201).json({
            success:true,
            msg:'Assignment Added'
        })
    })


})


// Get Assignment list sorted values
// router.get('/get-assignments',(req, res)=>{
  
//     Assignment.find({}).sort({acode:'asc'}).exec(
//         function (err, assignment) {
//             if (err){
//                 return res.json({msg:'something went wrong'})
//                 }
//                 else{
//                 res.json(assignment)
//                 }
//             })
// })

// get unsorted assignment list
router.get('/get-assignments',(req, res)=>{
  
    Assignment.find({},
        function (err, assignment) {
            if (err){
                return res.json({msg:'something went wrong'})
                }
                else{
                res.json(assignment)
                }
            })
})

//update assignment by id

router.patch('/update-assignment', (req, res) => {

        const id = req.body._id
        Assignment.findByIdAndUpdate(id, req.body,{useFindAndModify: false})
        .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.status(200).send({message:"Assignment updated"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })



})

// Delete Assignment

router.delete('/delete-assignment',(req, res) => {
    let { _id } = req.body
    Assignment.findOneAndDelete({ 
    _id: _id  },
    function (err) {
    if (err){
            console.log(err);
        }
        else{
        res.status(200).json({msg:'Assignment deleted'})
        }
    });
})






module.exports = router