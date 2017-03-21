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
var userdmg = 0;
var computerdmg = 0;
var userlevel = 0;
var array = [spike, faye, ed, jet, vicious];

function writecomp() {
    $("#compstats").html("Health: " + computerhealth + "<br>" + "Armor: " + computerarmor + "<br>" + "Attack: " + computerattack);
    $("#dmg").html("User damage: " + userdmg + "<br>" + "Computer damage: " + computerdmg);
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
            userhealth = parseInt(userhealth * 1.5);
            userattack = ($(this).attr("data-attack"));
            userattack = parseInt(userattack * 1.5);
            userarmor = ($(this).attr("data-armor"));
            userarmor = parseInt(userarmor * 1.5);
            ($(this).attr("id", "useravatar"));
            ($(this).attr("data-picked", "yes"));
            ($(this).appendTo("#userpicked"));
            $("#userpicked").show();
            $("#userpicked").hide();
            userpicked++;
            writeuser();
            $("#title").html("<h1>Pick who to fight!");
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
            $("dmg").show();
            writecomp();
            $("#userpicked").show();
            $("#beaten").show();
            $("#title").html("<h1>FIGHT!</h1>");
        }
    });
    $("#fightbutton").on("click", function() {

        if (userpicked === 2) {
            // user attack
            userdmg = Math.floor(Math.random() * 20) + userattack - computerarmor;
            if (userdmg<0){
                userdmg=0;
            }
            computerhealth = computerhealth - userdmg;
            // computer attack
            computerdmg = Math.floor(Math.random() * 20) + computerattack - userarmor;
            if(computerdmg<0){
                computerdmg=0;
            }
            userhealth = userhealth - (computerdmg);
            $("#dmg").show();
            if (userhealth <= 0) {
                $("#computeravatar").appendTo("#player");
                $("#content").html("<h1>You lost!");
                $("#title").html("Sorry");
                userpicked = 10;
            } else if (computerhealth <= 0) {
                userlevel++;
                // hide button,show picture div, set userpicked to 1
                $("#dmg").hide();
                $("#fightbutton").hide();
                $("#compstats").hide();
                $("#player").show();
                userpicked = 1;
                // move current div to beaten, check if last in array
                $("#beaten").show();
                $("#computeravatar").appendTo("#beaten");
                userattack = userattack + userlevel;
                userarmor = userarmor + userlevel;
                userhealth = userhealth + 10;
                $("#userpicked").hide();
                $("#beaten").hide();
                $("#title").html("<h1>Pick who to fight!");
                if (userlevel === (array.length - 1)) {
                    $("#useravatar").appendTo("#player");
                    $("#content").html('<h1>You won!</h1>');
                    $("#title").html("Congratulations");
                    userpicked++;
                }
            }
        }
        writecomp();
        writeuser();
    });

});