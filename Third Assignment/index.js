const express = require("express")
const mysql = require("mysql")

const con=mysql.createConnection({
    host: 'localhost',
    user: 'sqluser',
    password: 'password',
    database: 'assignment3'
})

con.connect(function(err){
    if(err)
    {
        console.log(err)
    }else{

        //Create table
        var sql="CREATE TABLE student (rollno int(6), name varchar(20), branch varchar(20))";
        con.query(sql,(err,result)=> {
            if(err){
                console.log(err)
            }else{
                console.log("Table created")
            }
        })

        ////Insert record
        // var sql="INSERT INTO student (rollno, name, branch) VALUE (1, 'Somphors Yun', 'Department of SE')";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("Record Inserted")
        //     }
        // })

        ////Add new column
        // var sql="ALTER TABLE student ADD class varchar(20)";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("New column added")
        //     }
        // })

        ////Delete records
        // var sql="DELETE FROM student WHERE rollno=1";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("Record deleted")
        //     }
        // })

        ////Delete columns
        // var sql="ALTER TABLE student DROP COLUMN branch";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("Column deleted")
        //     }
        // })

        ////Alter column data type
        // var sql="ALTER TABLE student MODIFY COLUMN rollno int(8)";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("Data type changed")
        //     }
        // })

        ////Delete all records
        // var sql="DELETE FROM student";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("All records deleted")
        //     }
        // })

        ////Delete table
        // var sql="DROP TABLE student";
        // con.query(sql,(err,result)=> {
        //     if(err){
        //         console.log(err)
        //     }else{
        //         console.log("Table deleted")
        //     }
        // })     
    }
})