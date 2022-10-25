const express = require('express');
const router=express.Router();

router.get('/',(req,res)=>{
    res.render('index');
});
router.get('/getstarted',(req,res)=>{
    res.render('getstarted');
});
router.get('/index',(req,res)=>{
    res.render('index');
});
router.get('/userlogin',(req,res)=>{
    res.render('userlogin');
});
router.get('/adminlogin',(req,res)=>{
    res.render('adminlogin');
});
router.get('/signup',(req,res)=>{
    res.render('signup');
});
router.get('/admin_view',(req,res)=>{
    res.render('admin_view');
});
router.get('/filecomplaint',(req,res)=>{
    res.render('filecomplaint');
});
router.get('/complaint_history',(req,res)=>{
    res.render('complaint_history');
});
router.get('/historylogin',(req,res)=>{
    res.render('historylogin');
});
router.get('/update',(req,res)=>{
    res.render('update');
});
router.get('/userpage1',(req,res)=>{
    res.render('userpage1');
});

module.exports=router;