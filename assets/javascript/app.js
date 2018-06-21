$(document).ready(function () {

    var topics = ["Kansas Jayhawks", "Kansas State Wildcats", "Missouri Tigers", "Nebraska Cornhuskers", "Oklahoma Sooners", "Oklahoma State Cowboys", "Colorado Buffaloes", "Michigan Wolverines", "Miami Hurricanes", "Oregon Ducks", "USC Trojans", "Villanova Wildcats", "Ohio State Buckeyes", "West Virginia Mountaineers", "Texas Longhorns", "Wyoming Cowboys", "Florida Gators", "Alabama Crimson Tide", "Kentucky Wildcats", "Arkansas Razorbacks", "LSU Tigers"];



    function  starterBtn (){
        $("#teams-btn").empty();
        for (var i = 0; i < topics.length; i++) {

            var teams = $("<button>");
            teams.text(topics[i]);
            teams.attr("data-search", topics[i]);

            $("#teams-btn").append(teams);
        }
    };

    $("#new-btn").on("click", function (event) {
        event.preventDefault();

        var toAddTeam = $("#new-team").val().trim();
        
        topics.push(toAddTeam);
        console.log(toAddTeam);
        
        //var teamAdded = $("<button>");
       // teamAdded.text(toAddTeam);
       // teamAdded.attr("data-search", toAddTeam);

        
        //$("#teams-btn").append(toAddTeam);

        $("#new-team").val("");
        starterBtn()
        //console.log(teamAdded);
        
        

    
    });
    

    $("#teams-btn").on("click", "button", function () {
        var x = $(this).attr("data-search");
        console.log(x)

        var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + x + "&api_key=PvR3ZmrRYXjaXs61VPyDn2CDWb88eoGA&limit=10";
        console.log(queryURL);


        $.ajax({ url: queryURL, method: "GET" })
            .done(function (response) {
                console.log(response);
                $("#GIFarea").empty();
                for (var i = 0; i < response.data.length; i++) {
                    var teamsDiv = $("<div>");
                    var p = $("<p>Rating: " + response.data[i].rating + "</p>");
                    var teamsImg = $("<img>");

                    teamsImg.attr('src', response.data[i].images.fixed_height_small_still.url);
                    teamsImg.attr('data-state', 'still');
                    teamsDiv.append(teamsImg);
                    teamsDiv.append(p);
                    $("#GIFarea").prepend(teamsDiv);

                }

            });



    });

    (document).on("click", function() {


    });

    starterBtn();
    

















});

