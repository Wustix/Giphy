//$(document).ready(function () {

var topics = ["Kansas Jayhawks", "Kansas State Wildcats", "Missouri Tigers", "Nebraska Cornhuskers", "Oklahoma Sooners", "Oklahoma State Cowboys", "Colorado Buffaloes", "Michigan Wolverines", "Miami Hurricanes", "Oregon Ducks", "USC Trojans", "Villanova Wildcats", "Ohio State Buckeyes", "West Virginia Mountaineers", "Texas Longhorns", "Wyoming Cowboys", "Florida Gators", "Alabama Crimson Tide", "Kentucky Wildcats", "Arkansas Razorbacks", "LSU Tigers"];

// var queryURL = "https://api.giphy.com/v1/gifs/search?q="+x+"&api_key=PvR3ZmrRYXjaXs61VPyDn2CDWb88eoGA";

$("button").on("click", function () {
    var x = $(this).data("search");


    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=PvR3ZmrRYXjaXs61VPyDn2CDWb88eoGA&limit=10";
    console.log(queryURL);


    $.ajax({ url: queryURL, method: "GET" })
        .done(function (response) {
            console.log(response);
        });



});


















//});