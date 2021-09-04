let users = [
    {id:1, nama:'rifki', email:'rifki@gmail.com'},
    {id:2, nama:'aldi', email:'aldi@gmail.com'}
]

module.exports = {
    index: function(request, response){
        if(users.length> 0 ){
            response.json({
                status: true,
                data: users,
                method: request.method,
                url: request.url
            })
        }else{
            response.json({
                status: false,
                message: 'Maaf, data yang anda minta masih kosong'
            })
        }
    },
    
    store: function(request, response){
        users.push(request.body)
        response.send({
            status: true,
            data: users,
            message: 'Data berhasil disimpan',
            method: request.method,
            url: request.url
        })
    },

    update: function(request, response){
        // response.setHeader('content-type', 'text/plain');
        const id = request.params.id
        users.filter(user =>{
            if(user.id == id){
                user.id = id
                user.nama = request.body.nama
                user.email = request.body.email
                return user
            }
        })
        response.json({
            status: true,
            data: users,
            message: 'Data berhasil diedit',
            method: request.method,
            url: request.url
        })
    },

    delete:  function(request, response){
        let id = request.params.userId
        users = users.filter(user => user.id != id)
        response.send({
            status: true,
            data: users,
            message: 'Data berhasil didelete',
            method: request.method,
            url: request.url
        })
    }
    
}