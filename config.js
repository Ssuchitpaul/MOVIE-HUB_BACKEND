const mysql=require('mysql2');
const dotenv=require('dotenv');

dotenv.config();

const connection=mysql.createConnection({
    
    host:"birhokvn04quxuulgotq-mysql.services.clever-cloud.com",
    user:"ubupgcxfd8faxtx1",
    password:"ZxGDRYAmnwaUy1IcGeWi",
    database:"birhokvn04quxuulgotq",
    port:3306

});

connection.connect((err)=>
{
    if(err) throw err;
    console.log('connected to database-------------------');
});

module.exports=connection;
