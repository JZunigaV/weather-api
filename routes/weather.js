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

//pasos para subir a github

/*
1- git status ---> ver archivos modificados
2- git add (nombre del archivo) agregar archivos que vas a subir
3- git commit -m poner mensaje para tu cambio (commit)
4- git push origin nombre de la rama subir el cambio a repositorio de github
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

router.post("/by-coordinates", function (req, res, next) {
    // volví a definir la apiKey, aunque no sé si es necesario ya que arriba está definida, pero al cerrar el ciclo con ";" creo que ya nose define en esta parte 
    const apiKey = "73c70ab6fb409b92f403de9291402e9b";
    // defini lat y lon de la misma forma que se definio city
    let lat = req.body.lat;
    let lon = req.body.lon;
    // volví a definir un url, aunque no sé si deba de cambiar el nombre
    let url = `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}`;

    //Defino el error y la respuesta de forma similar que en el ejemplo del post by-city
    request(url,function(err,response,body) {
        if(err) {
            console.log("Hubo un error");
        } else {
            res.send(JSON.parse(body));
        }
    });
});


module.exports = router;