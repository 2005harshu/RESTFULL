const express=require('express');

const app=express();

//CRUD OPERATION

const Users=require('./data/user');

app.set('view engine','ejs');

app.use(express.urlencoded({extended:true}));

app.get('/',(req,res)=>{
    res.send('HOME PAGE');
})

// app.get('/home',(req,res)=>{
//     res.render('home');
// })

app.get('/users',(req,res)=>{
    res.render('user',{Users});
})

app.get('/users/new',(req,res)=>{
    res.render('new');
})

app.post('/users',(req,res)=>{
    console.log(req.body);
    const {username,password,city}=req.body;
    let x=Users[Users.length-1].id;
    const user={
        id:x+1,
        username:username,
        password:password,
        city:city
    }
    Users.push(user);

    //res.send('ok')
    res.redirect('/users');
})

app.listen(4400,()=>{
    console.log('Server runs at 4400 port');
});
