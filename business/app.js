var express = require("express");
var app = express();

app.set("view engine", "ejs");

app.get("/", function (req, res){
    res.render("landing");
   
});


// campgrounds===seasons
app.get("/seasons", function(req, res){
var seasons =[
    {name: "Spring", image: "https://fortunedotcom.files.wordpress.com/2019/03/first-day-of-spring-2019-e1552928128367.jpg?w=1024"},
    {name: "Summer", image: "http://wallpaperping.com/wp-content/uploads/2018/05/summer-image.jpg"},
    {name: "Autumn", image: "https://pfc.ca/wp-content/uploads/2018/08/fallpreview18.jpg"},
    {name: "Winter", image: "https://24o4jw8cb0e2pym4i236aag1-wpengine.netdna-ssl.com/wp-content/uploads/2018/12/winter-rail-journeys.jpg"}
    ]
    res.render("seasons", {seasons: seasons});
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("The Sales Server Has Started! ");
   });