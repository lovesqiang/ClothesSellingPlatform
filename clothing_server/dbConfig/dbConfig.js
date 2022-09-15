const mysql = require('mysql')

module.exports = {
    dbConnect:function(sql,arr,fun){
        let dbconnect = mysql.createConnection({
            host:'localhost',
            port:3306,
            user:'root',
            password:'root',
            database:'clothing'
        })
    
        dbconnect.connect()
    
        dbconnect.query(sql,arr,fun)

        dbconnect.end()
    }
}