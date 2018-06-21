$(document).ready(function () {

    var topics = ["Kansas Jayhawks", "Kansas State Wildcats", "Missouri Tigers", "Nebraska Cornhuskers", "Oklahoma Sooners", "Oklahoma State Cowboys", "Colorado Buffaloes", "Michigan Wolverines", "Miami Hurricanes", "Oregon Ducks", "USC Trojans", "Villanova Wildcats", "Ohio State Buckeyes", "West Virginia Mountaineers", "Texas Longhorns", "Wyoming Cowboys", "Florida Gators", "Alabama Crimson Tide", "Kentucky Wildcats", "Arkansas Razorbacks", "LSU Tigers"];


    function starterBtn() {
        $("#teams-btn").empty();
        for (var i = 0; i < topics.length; i++) {

            var teams = $("<button>");
            teams.text(topics[i]);
            teams.attr("data-search", topics[i]);

            $("#teams-btn").append(teams);
        }
    };
    starterBtn();
    $("#new-btn").on("click", function (event) {
        event.preventDefault();

        var toAddTeam = $("#new-team").val().trim();

        topics.push(toAddTeam);
        console.log(toAddTeam);

        $("#new-team").val("");
        starterBtn()
        
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

                    teamsImg.attr("src", response.data[i].images.fixed_height_still.url);
                    teamsImg.attr("data-still", response.data[i].images.fixed_height_still.url);
                    teamsImg.attr("data-animate", response.data[i].images.fixed_height.url);
                    teamsImg.attr("data-state", "still");
                    teamsImg.addClass("images");
                    teamsDiv.append(teamsImg);
                    teamsDiv.append(p);
                    $("#GIFarea").prepend(teamsDiv);

                }

            });

    });


    $(document).on("click", ".images", function () {
        var state = $(this).attr('data-state');
        if (state == 'still') {
            $(this).attr('src', $(this).data('animate'));
            $(this).attr('data-state', 'animate');
        } else {
            $(this).attr('src', $(this).data('still'));
            $(this).attr('data-state', 'still');
        }

    });

});

