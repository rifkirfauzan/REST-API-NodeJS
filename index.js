const express = require('express')
//Memmanggil modules express
const userRouter = require('./router/users')
//Memanggil modules buatan sendiri
const app = express()
//Simpan objek ke dalam variable const 
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

//Middleware
var myLogger = function (request, response, next) {
    request.time = new Date()
    next()
  }

  app.use(myLogger)
//

//Template Engine
app.set('view engine','ejs')

//Routing
app.get('/', function(request, response){
    response.setHeader('content-type', 'text/plain');
    const kelas = {
        id: 1,
        nama: 'Js',
        date: request.time.toString()
    }
    response.json(kelas)
    //Cetak ke dalam layar 
})

app.get('/about', function(request, response){
    // response.setHeader('content-type', 'text/plain');
    response.redirect('https://expressjs.com')
})

app.use(userRouter)

app.get('/users', function(request, response){
    // response.setHeader('content-type', 'text/plain');
})

app.post('/users', function(request, response){
    // response.setHeader('content-type', 'text/plain');
})

//Routing app
//lakukan request terhadap method get
//

app.listen(3000, function(){
    console.log('Server sudah siap')
})
//Menjalankan server dengan port 3000
