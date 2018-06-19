$(document).ready(function () {

    var topics = ["Kansas Jayhawks", "Kansas State Wildcats", "Missouri Tigers", "Nebraska Cornhuskers", "Oklahoma Sooners", "Oklahoma State Cowboys", "Colorado Buffaloes", "Michigan Wolverines", "Miami Hurricanes", "Oregon Ducks", "USC Trojans", "Villanova Wildcats", "Ohio State Buckeyes", "West Virginia Mountaineers", "Texas Longhorns", "Wyoming Cowboys", "Florida Gators", "Alabama Crimson Tide", "Kentucky Wildcats", "Arkansas Razorbacks", "LSU Tigers"];

    //var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=PvR3ZmrRYXjaXs61VPyDn2CDWb88eoGA";
    
    function starterBtn() {
        for (var i = 0; i < topics.length; i++) {
            
            var teams = $("<button>");
            teams.text(topics[i]);
            
            $("#teams-btn").append(teams)
        }
    };

    $("button").on("click", function () {
        var x = $(this).data("search");


        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=PvR3ZmrRYXjaXs61VPyDn2CDWb88eoGA&limit=10";
        console.log(queryURL);


        $.ajax({ url: queryURL, method: "GET" })
            .done(function (response) {
                console.log(response);
                for (var i = 0; i < response.data.length; i++) {
                    var teamsDiv = $("<div>");
                    var p = $("<p>Rating: " + response.data[i].rating + "</p>");
                    var teamsImg = $("<img >");

                    teamsImg.attr('src', response.data[i].images.downsized.url);
                    teamsDiv.append(teamsImg);
                    teamsDiv.append(p);
                    $("#GIFarea").prepend(teamsDiv);
                    
                }

            });



    });

    starterBtn()
    //.append(topics.length[i])

















});