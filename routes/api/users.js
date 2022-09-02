const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const passport = require('passport')
const User = require('../../model/User')
const key = require('../../config/keys').secret

// @route POST api/users/register
// @desc POST Register the user
// @access Public
//Register teacher
router.post('/register-teacher', (req, res) => {

    let { name, username, email, password, confirm_password, role } = req.body

        
        if (password !== confirm_password) {
            return res.status(400).json({
                success:false, //Added
                msg: "password do not match"
            })
    
        }

    //Check for the unique username

    // User.findOne({
    //     username: username
    // }).then(user => {
    //     console.log('res', user)
    //     if (user) {
    //         return res.status(400).json({ 
    //             success:false, //Added
    //             msg: "username already taken"
    //         })
    //     }
    // })
   

    //Check for unique email
    // User.findOne({
    //     email,
    // }).then((user) => {
        
    //     if (user) {
    //         return res.status(400).send({
    //             success:false, //Added
    //             msg: "email already registered"
    //         })
    //     }
    //     else {
    //         console.log('else');
    //         res.send(500).json({
    //             error: 'error'
    //         })
    //     }
      
      
    // })

    User.findOne({ username }, (err, user) => {
        if (err || user) {
           return res.status(200).json({
            error: "Username already exists",
            status:404
          });

        }
      
            let newUser = new User({
                name,
                username,
                password,
                email,
                role
            })
        
        
            //hashing password
        
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash;
                 
                    newUser.save().then(user => {
                        return res.status(201).json({
                            success: true,
                            msg: "User registered successfully"
                        })
                    })
                })
            })
        
        
    })

    //Register teacher
    //Everything is checked
  

})

// @route POST api/users/login
// @desc login the user
// @access Public


router.post('/login', (req, res) => {
    User.findOne({
        username: req.body.username
    }).then(user => {
        if (!user) {
            return res.status(200).json({
                status:400,
                error: 'Username not found',
            })
        }
         //if there is user we compare password
         bcrypt.compare(req.body.password, user.password).then(isMatch => {
            if (isMatch) {
                //generating JWT
                const payload = {
                    _id: user._id,
                    username: user.username,
                    name: user.name,
                    email: user.email
                }
                jwt.sign(payload, key, {
                    expiresIn: 604800
                }, (err, token) => {
                    res.status(200).json({
                        success: true,
                        token: `Bearer ${token}`,
                        user: user,
                        msg: 'User loged in'
                    })
                })
            }
            else {
                return res.status(200).json({
                    status:400,
                    error: 'Password incorrect'
                })

            }
        })

       
    })
})


// @route POST api/users/profile
// @desc Return the user data
// @access private

router.get('/profile', passport.authenticate('jwt',
 { session: false }), (req, res) => {
        return res.json({           //this converts content to json
            user: req.user})
})



// Student Section

// @route POST api/users/add-student
// @desc POST add student
// @access private
// Add Student
 
router.post('/add-student', (req, res) => {

    let { name, username, email, password, confirm_password } = req.body

    if (password !== confirm_password) {
        return res.status(400).json({
            msg: "password do not match"
        })

    }

    //Check for the unique username

    User.findOne({
        username: username
    }).then(user => {
        if (user) {
            return res.status(400).json({
                msg: "username already taken"
            })
        }

    })

    //Check for unique email
    User.findOne({
        email: email
    }).then(user => {
        if (user) {
            return res.status(400)
            // .json({
            //     msg: "email already registered"
            // })
        }
    })

    //Add Student
    //Everything is checked
    let newUser = new User({
        name,
        username,
        password,
        email,
        
    })


    //hashing password

    bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
            if (err) throw err;
            newUser.password = hash;
            newUser.save().then(user => {
                return res.status(201).json({
                    success: true,
                    msg: "Student registeres successfully"
                })
            })
        })
    })

})

// @route POST api/users/get student list
// @desc Return the user where role is student
// @access private

// router.get('/get-student',(req, res) => {
//     User.find({ 
//         role: 'student'},
//     function (err, student) {
//         if (err){
//             console.log(err);
//         }
//         else{
//             res.json(student);
           
//         }
//     })
// })
router.get('/get-student',(req, res) => {
    User.find({ 
        role: 'student'}).sort({name: 'asc'}).exec(
    function (err, student) {
        if (err){
            console.log(err);
        }
        else{
            res.json(student);
           
        }
    })
})

// @route POST api/users/delete-student
// @desc delete the user where role is student
// @access private
// Error not handled

router.delete('/delete-student',(req, res) => {
    let { _id } = req.body
    User.findOneAndDelete({ 
    _id: _id /*role:'student'*/ },
    function (err) {
    if (err){
            console.log(err);
        }
        else{
        res.status(200).json({msg:'Student deleted'})
        }
    });
})

// @route POST api/users/update-student
// @desc update the student where role is student
// @access private
//update student



router.patch('/update-student', (req, res) => {
    
    // let {username} = req.body

    // User.findOneAndUpdate({
    //     username: username
    //     }) 

    const id = req.body._id
    User.findByIdAndUpdate(id, req.body, { useFindAndModify: false})

    .then(data => {
            if(!data){
                res.status(404).send({ message : `Cannot Update user with ${id}. Maybe user not found!`})
            }else{
                res.status(200).send({message:"user updated"})
            }
        })
        .catch(err =>{
            res.status(500).send({ message : "Error Update user information"})
        })



    // let { name, email, password, confirm_password } = req.body

    // if (password !== confirm_password) {
    //     return res.status(400).json({
    //         msg: "password do not match"
    //     })

    // }

    //Check for the unique username

    // User.findOne({
    //     username: username
    // }).then(user => {
    //     if (user) {
    //         return res.status(400).json({
    //             msg: "username already taken"
    //         })
    //     }

    // })

    //Check for unique email
    // User.findOne({
    //     email: email
    // }).then(user => {
    //     if (user) {
    //         return res.status(400).json({
    //             msg: "email already registered"
    //         })
    //     }
    // })

    //find username and set values
    // User.findOne(
    //     {username:username},
    //     {
    //         $set:{
    //             name:name,
    //             username:username,
    //             email:email,
    //             password:password,
    //         }
    //     }
    // )

    //update Student
    //Everything is checked
    // let newData = new User({
    //     name,
    //     username,
    //     password,
    //     email,
        
    // })


    //hashing password

    // bcrypt.genSalt(10, (err, salt) => {
    //     bcrypt.hash(newData.password, salt, (err, hash) => {
    //         if (err) throw err;
    //         newData.password = hash;
    //         newData.save().then(user => {
    //             return res.status(201).json({
    //                 success: true,
    //                 msg: "Student updated successfully"
    //             })
    //         })
    //     })
    // })

})


module.exports = router