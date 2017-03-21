var spike = {
    name: "Spike Spiegel",
    health: 100,
    attack: 5,
    armor: 5,
    image: "assets/images/spike.png"
};
var faye = {
    name: "Faye Valentine",
    health: 80,
    attack: 6,
    armor: 5,
    image: "assets/images/faye.png"
};
var ed = {
    name: "Ed",
    health: 100,
    attack: 4,
    armor: 6,
    image: "assets/images/ed.png"
};
var jet = {
    name: "Jet Black",
    health: 120,
    attack: 4,
    armor: 5,
    image: "assets/images/jet.png"
};
var vicious = {
    name: "Vicious",
    health: 100,
    attack: 7,
    armor: 3,
    image: "assets/images/vicious.png"
};
var userhealth;
var userattack;
var userarmor;
var computerhealth;
var computerattack;
var computerarmor;
var userpicked = 0;
var array = [spike, faye, ed, jet, vicious];

function writecomp() {
    $("#compstats").html("Health: " + computerhealth + "<br>" + "Armor: " + computerarmor + "<br>" + "Attack: " + computerattack);
}

function writeuser() {
    $("#userstats").html("Health: " + userhealth + "<br>" + "Armor: " + userarmor + "<br>" + "Attack: " + userattack);

}
$("#fightbutton").hide();
$("#userpicked").hide();
$("#compPicked").hide();
$("#beaten").hide();
$(document).ready(function() {
    for (var i = 0; i < array.length; i++) {
        var characterBtn = $("<img>");
        characterBtn.addClass("characters pictures");
        characterBtn.attr("data-name", array[i].name);
        characterBtn.attr("data-health", array[i].health);
        characterBtn.attr("data-attack", array[i].attack);
        characterBtn.attr("data-armor", array[i].armor);
        characterBtn.attr("data-picked", "no");
        characterBtn.attr("src", array[i].image);
        $("#player").append(characterBtn);
    }
    $(".characters").on("click", function() {
        if (userpicked === 0) {
            userhealth = ($(this).attr("data-health"));
            userhealth = parseInt(userhealth * 2);
            userattack = ($(this).attr("data-attack"));
            userattack = parseInt(userattack * 2);
            userarmor = ($(this).attr("data-armor"));
            userarmor = parseInt(userarmor * 2);
            ($(this).attr("id", "useravatar"));
            ($(this).attr("data-picked", "yes"));
            ($(this).appendTo("#userpicked"));
            $("#userpicked").show();
            userpicked++;
            writeuser();
        } else if (userpicked === 1) {
            computerhealth = ($(this).attr("data-health"));
            computerhealth = parseInt(computerhealth);
            computerattack = ($(this).attr("data-attack"));
            computerattack = parseInt(computerattack);
            computerarmor = ($(this).attr("data-armor"));
            computerarmor = parseInt(computerarmor);
            ($(this).attr("id", "computeravatar"));
            ($(this).attr("data-picked", "yes"));
            ($(this).appendTo("#compPicked"));
            $("#compPicked").show();
            $("#player").hide();
            userpicked++;
            $("#fightbutton").show();
            $("#compstats").show();
            writecomp();
        }
    });
    $("#fightbutton").on("click", function() {

        if (userpicked === 2) {
            // user attack
            computerhealth = computerhealth - (Math.floor(Math.random() * 20) + userattack - computerarmor);
            // computer attack
            userhealth = userhealth - (Math.floor(Math.random() * 20) + computerattack - userarmor);
            if (userhealth <= 0) {
                console.log("you lose");
                userpicked = 10;
            } else if (computerhealth <= 0) {
                console.log("you win")
                    // hide button,show picture div, set userpicked to 1
                $("#fightbutton").hide();
                $("#compstats").hide();
                $("#player").show();
                userpicked = 1
                    // move current div to beaten, check if last in array
                $("#beaten").show();
                $("#computeravatar").appendTo("#beaten");
            }
        }
        writecomp();
        writeuser();
    });

});