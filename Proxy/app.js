const dotenv = require('dotenv').config();
const https = require("https")
const express = require("express");
const bodyParser = require("body-parser");
const cors = require('cors');

const apiKey = process.env.API_KEY;
const unit = "metric";
const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.get("/api/weather", (request, response) => {
    let location = request.query["location"];
    if (location) {
        if (location !== "") {
            let url = "https://api.openweathermap.org/data/2.5/weather?q=" + location + "&appid=" + apiKey + "&units=" + unit;
            https.get(url, (res) => {
                res.on("data", (data) => {
                    const weatherData = JSON.parse(data);
                    console.log(weatherData);
                    response.send(weatherData);
                });
            });
        }
    }
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server running on port " + (process.env.PORT || 3000));
});