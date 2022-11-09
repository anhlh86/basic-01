const { request } = require("express");
var Student = require("../models/student");


module.exports = function(app){
    app.get("/", function(req, res){
        //res.send("System is okeys.");
        res.render("layout");
    });

    app.post("/register", function(req, res){
        if(!req.body.Email || !req.body.FullName || !req.body.MobilePhone){
            res.json({Result: 0, ErrorCode: "Not enough information."});
        }else{
            var newStudent = new Student({
                Email: req.body.Email,
                FullName: req.body.FullName,
                MobilePhone: req.body.MobilePhone,
                Paid: false,
                WalletAddress: "",
                RegistrationDate: Date.now()
            });

            newStudent.save(function (err, student){
                if(err){
                    res.json({Result: 0, ErrorCode: "Mongo save failed."});
                }else{
                    res.json({Result: 1, ErrorCode: newStudent});
                }
            });
        }
    });
}

