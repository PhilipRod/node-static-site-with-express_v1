const express = require("express");
const { route } = require("./routes");
const router = require("./routes");

const app = express();

//setting the view engine to pug

app.set("view engine","pug")

//Serving the static files
app.use("/static",express.static("public"))

//Routing
const routes = require("./routes")
app.use(routes)

const projectsRoutes = require("./routes/projects")
app.use('/projects',projectsRoutes)


app.use(( req, res, next )=>{
    const err = new Error("Not Found")
    err.status = 404;
    next(err)
})

// Handling error
app.use((err,req,res,next)=>{
    res.locals.error =err
    res.status(err.status);
    console.error(`There is an error : ${err.status}: ${err.message} ` )
    res.render('error')
})



app.listen(3000, console.log("app is running on port 3000"))