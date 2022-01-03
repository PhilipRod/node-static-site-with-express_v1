const express = require("express")
const router = express.Router()

const data = require("../data.json"); 
const {projects} = data;

router.get('/:id',(req,res,next)=>{
    if(projects[req.params.id]){
        return res.render('project',projects[req.params.id])
    }else{
        const err = new Error("Cannot find project")
        err.status = 404;
        next(err)
    }
    
})

module.exports = router;