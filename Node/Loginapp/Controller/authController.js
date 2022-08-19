const express = require('express')
const router = express.Router();
const bodyParser = require('body-parser')
const jwt = require('jsonwebtoken')
const bcryptjs = require('bcryptjs')
const config = require('../config')
const User = require('../Model/userModel');
const e = require('express');

router.use(bodyParser.urlencoded({extended:true}))
router.use(bodyParser.json())

//get all users
router.get('/users', (req,res)=>{
    User.find({}, (err,data)=>{
        if(err)throw err;
        res.send(data)
    })
})
//register User
router.post('/register',(req,res)=>{
    //encrypt Password
    let hashPassword = bcryptjs.hashSync(req.body.password,8)
    User.create(
        {
        name : req.body.name,
        email: req.body.email,
        password : hashPassword,
        phone : req.body.phone,
        role: req.body.role?req.body.role : 'user'
    },
            User.findOne({email:req.body.email}, (err, user)=>{
                console.log("user "+user)
            if(user) return res.send('User Already Exists')
            else{
                if(err) return res.status(500).send('oops! seems like we are having error while registering ')
                res.status(200).send('Enjoy ! Registration Successfull !')
            }

            })
            
        
        
    )
})
//login user
router.post('/login',(req,res)=>{
    User.findOne({email:req.body.email}, (err,user)=>{
        if(err) return res.send({auth:false,token:'Error While Login'})
        if(!user) return res.send({auth:false, token:'No User found with this id, Please register first'})
        else{
            const passIsValid = bcryptjs.compareSync(req.body.password, user.password)
            if(!passIsValid) return res.send({auth:false, token:'Invalid Password'})
            //in case both email and password are correct then generate token
            let token = jwt.sign({id:user._id}, config.secret,{expiresIn:86400})//24 hrs
            return res.send({auth:true, token:token})
        }
    })
})
//userInfo
router.get('/userInfo', (req,res)=>{
    let token = req.headers['x-access-token']
    console.log("token:"+ token)
    if(!token) res.send({auth: false, token: 'No token provided'})
    //jwt verify token
    jwt.verify(token,config.secret,(err,user)=>{
        if(err) return res.send({auth:false, token:'Invalid Token'})
        User.findById(user.id,(err,result)=>{
            res.send(result)
        })
    })
})

module.exports = router