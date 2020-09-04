const express = require('express');
const router = express.Router();
const request = require("request");
const { response } = require("express");

router.get("/", (request, res, next) => {
    res.send("Hello world from weather api");
});


//Obtiene el clima dependiendo de la ciudad que mandes

//Endpoint para consultar una ciudad ----> api.openweathermap.org/data/2.5/weather?id={city id}&appid={your api key}

//Api key -----> 73c70ab6fb409b92f403de9291402e9b

//request--- > en postman elegir body --> raw ---> JSON
/*

{
    "city":"tokyo"
}

*/

router.post("/by-city", function (req, res, next) {

    const apiKey = "73c70ab6fb409b92f403de9291402e9b";
    let city = req.body.city;

    
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`; //armamos la url como nos indica la documentación

    //Armar la peticion al servicio de open weather https://openweathermap.org/current
    request(url, function(err, response, body) {

        //Checamos que no exista un error
        if (err) {
            console.log("Hubo un error");
        } else {
            //La respuesta esta en el parametro "body"
            res.send(JSON.parse(body));

        }
    });

});


module.exports = router;