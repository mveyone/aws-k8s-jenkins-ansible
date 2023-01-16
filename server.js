const express=require('express');
const blogRoutes=require('./routes/blogRoutes');
const mongoose=require('mongoose');
const ejs=require('ejs');
const morgan=require('morgan');
const Blog=require('./models/blog');

//some stackiverflow
var util= require('util');
var encoder = new util.TextEncoder('utf-8');

//creating app
const app=express();

//c############################################connecting to db###########################
// mongoose.connect('mongodb://localhost/ninjago3',{useNewUrlParser: true},{useUnifiedTopology: true},()=>{
//     console.log('connected to db!!!!');
// });

// ###############################Connect to MongoDB wih docker-compose###############################
// mongoose.connect('mongodb://mongo:27017/mydb?authSource=admin', { useNewUrlParser: true } ) local + dockercompose + k8s
// mongoose.connect('mongodb://admin:password@mongodb?authSource=admin', { useNewUrlParser: true } ) // with docker 'mongoose.connect('mongodb://admin:password@mongodb/blogs?authSource=admin' + localhost we use localhost
// .then(() => console.log('MongoDB Connected'))
//   .catch(err => console.log(err));
// #########################################what is used now is k8s #####################################""
  mongoose.connect('mongodb://admin:password@mongodb/blogs?authSource=admin', { useNewUrlParser: true } ) // with docker 'mongoose.connect('mongodb://admin:password@mongodb/blogs?authSource=admin' + localhost we use localhost
.then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));

  
//register view engine
app.set('view engine','ejs');

//setting port
// app.listen(process.env.process || 5002,()=>{
//     console.log('now listenning on Port 5002!!!');
// });
const port = 3000;
app.listen(port, ()=> {
  console.log(('server running on port 3000!'));
});



// register view engine
app.set('view engine', 'ejs');

// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(morgan('dev'));
app.use((req, res, next) => {
  res.locals.path = req.path;
  next();
});

// routes
app.use(blogRoutes);
// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});