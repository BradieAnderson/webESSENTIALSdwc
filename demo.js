//feels like html bc it's based off html

$(document).ready(function(){
console.log("testing jquery");
    $("p").css("color", "red");
    $(".redFont").css({ color: "green", "margin-top": "20px"});
    $("#myTag").css({ color: "blue", "margin-top": "20px"});
    $("{href}").css("color", "#777");
    //$(.id).css("size":"larger")
    //$(#class).css("color": "green", "margin-top":"20px")

//can select, class, element, id, attribute, nest structure etc to select items w jquery
//you change the name in the first paranthese to the same way you'd id them in css by # or .
//id= etc, idk watch video
//if you go back to the web to jquery core, you can check api notation for all the avaliable short cuts
//multiple properties has curly brackets

//if you have a bunch of stuff selecting one line, element names, class, id, then they'll choose the last line so it'll chose the id if the shits in that order

$("#hide").on("click", function(){
    $("p").hide();
})

$("#show").on("click", function() {
$("p").show();
});

$("#toggle").on("clock", function(){
    $("h1").toggle();
});

}); //beginning one
