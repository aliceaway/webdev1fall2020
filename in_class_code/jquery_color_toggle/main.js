let clickToggle = true;

$('.box').click(function(){
console.log("poop")
if(clickToggle == true) {
    $('.box').css("background", "lightblue");
} else {
    $('.box').css("background", "lightsalmon");
}
clickToggle = !clickToggle;
})
