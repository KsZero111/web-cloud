const data = require('./database/connect')

//get user
// data.query('delete from shop returning *')
//     .then( result => console.log(result.rows) )


// data.query(`insert into users(username, password) values ('admin', '123') returning *`)
//     .then( result => console.log(result.rows) )
data.query(`insert into users(username, password) values ('hcmshop', '123') returning *`)
    .then( result => console.log(result.rows) )

data.end()