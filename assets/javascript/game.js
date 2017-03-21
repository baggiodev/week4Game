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
    attack: 7,
    armor: 7,
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
var userpicked = false;
var array = [spike, faye, ed, jet, vicious];
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
        if (userpicked === false) {
            var userhealth = ($(this).attr("data-health"));
            userhealth = parseInt(userhealth);
            var userattack = ($(this).attr("data-attack"));
            userattack = parseInt(userattack);
            var userarmor = ($(this).attr("data-armor"));
            userarmor = parseInt(userarmor);
            ($(this).attr("id", "useravatar"));
            ($(this).attr("data-picked", "yes"));
            ($(this).appendTo("#userpicked"));
            userpicked = true;
        } else if (userpicked) {
            var computerhealth = ($(this).attr("data-health"));
            computerhealth = parseInt(computerhealth);
            var computerattack = ($(this).attr("data-attack"));
            computerattack = parseInt(computerattack);
            var computerarmor = ($(this).attr("data-armor"));
            computerarmor = parseInt(computerarmor);
            ($(this).attr("id", "computeravatar"));
            ($(this).attr("data-picked", "yes"));
            ($(this).appendTo("#compPicked"));
            var test = $(".characters"[data-picked="yes"]);
            test.hide();
        }
    });
});