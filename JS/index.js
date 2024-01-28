console.log("index.js file loaded correctly")

$( document ).ready(function() {
    $('.card').hide();
    console.log( "hidden" );
});

// Get a reference to the element that you want to work with
var icon = document.getElementById("blueIcon");
var card = document.getElementsByClassName("card");

$( icon ).on( "mouseenter", function(){
    $('#j').animate( { left: "-130px" }, 400 );
    $('#e1').animate( { left: "-47px" }, 400 );
    $('#n1').animate( { right: "-30px" }, 400 );
    $('#n2').animate( { right: "-113px" }, 400 );
    $('#a1').animate( { right: "-199px" }, 400 );
    $('#c').animate( { right: "-341px" }, 400 );
    $('#a2').animate( { right: "-426px" }, 400 );
    $('#r1').animate( { right: "-483px" }, 400 );
    $('#e2').animate( { right: "-570px" }, 400 );
    $('#r2').animate( { right: "-629px" }, 400 );
    $('#i').animate( { right: "-670px" }, 400 );
    $('#blueIcon').animate( { left: "10px" }, 400 );
    $('#purpleIcon').animate( { right: "-215px" }, 400 );
    $('#greenIcon').animate( { right: "-345px" }, 400 );
    $('#orangeIcon').animate( { right: "-587px" }, 400 );
    $('#pinkIcon').animate( { right: "-695px" }, 400 );
    $('.card').fadeIn("1800");
    
    console.log("it worked");
});

$( card ).on( "mouseleave", function(){
    $('#j').animate( { left: "100px" }, 600 );
    $('#e1').animate( { left: "183px" }, 600 );
    $('#n1').animate( { right: "745px" }, 600 );
    $('#n2').animate( { right: "662px" }, 600 );
    $('#a1').animate( { right: "575px" }, 600 );
    $('#c').animate( { right: "436px" }, 600 );
    $('#a2').animate( { right: "348px" }, 600 );
    $('#r1').animate( { right: "290px" }, 600 );
    $('#e2').animate( { right: "205px" }, 600 );
    $('#r2').animate( { right: "146px" }, 600 );
    $('#i').animate( { right: "105px" }, 600 );
    $('#blueIcon').animate( { left: "240px" }, 600 );
    $('#purpleIcon').animate( { right: "560px" }, 600 );
    $('#greenIcon').animate( { right: "430px" }, 600 );
    $('#orangeIcon').animate( { right: "188px" }, 600 );
    $('#pinkIcon').animate( { right: "80px" }, 600 );
    $('.card').fadeOut("400");
    
    console.log("it worked");
});
    
    //.on( "mouseleave", handlerOut );

//$('#button1').on("click", function(){
 // $('.hideMe').slideToggle();
//});
