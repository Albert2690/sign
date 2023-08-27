var express =require('express')
var router  = express.Router();
const data = {
    username: "albert",
    password: 123
  };
  router.get('/', (req, res) => {
    if(req.session.user){
      res.redirect('/dashboard')
    }else{
      res.render('base',{title:'login'})
    }
});
 
  
  // Login user
  router.post('/login', (req, res) => {
    if (req.body.username == data.username && req.body.password == data.password) {
      req.session.user = req.body.username;
      res.redirect('/dashboard');
    } else {
      res.end("Invalid username or password");
    }
  });
  
  // Route for dashboard
  router.get('/dashboard', (req, res) => {
    if (req.session.user) {
      res.render('dashboard', { user: req.session.user });
    } else {
      // res.send("Unauthorized user");
      // res.end()
    }
  });
  

  router.get('/logout',(req,res)=>{
    // console.log("hi");
    req.session.destroy((err)=>{
      if(err){
        console.log("error");
        res.send("error")
      }else{
        // console.log("dfd");
        res.render('base',{logout:"logout successfully!!!"})
        
      }
    })
      
    
  })

  
  module.exports = router;
  
  // router.get('/logout',(req,res)=>{

  //   console.log("sshfsu");
  //   req.session.destroy((err)=>{
  //     if(err){
  //       console.log("error");
  //       res.send("error")
  //     }else{
  //       res.render('/base',{logut:"Logout successfully"})
  //     }
  //   })
  
  // })