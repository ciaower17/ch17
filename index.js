var lastSelected;


$(".one").click(function(){
    $(".one").css("background-color","hsl(25, 97%, 53%)");
    $(".one").css("color","white");
    if(lastSelected!=1){
        $(".two").css("background-color","hsl(210, 11%, 26%)");
        $(".two").css("color","hsl(216, 12%, 54%)");
        $(".three").css("background-color","hsl(210, 11%, 26%)");
        $(".three").css("color","hsl(216, 12%, 54%)");
        $(".four").css("background-color","hsl(210, 11%, 26%)");
        $(".four").css("color","hsl(216, 12%, 54%)");
        $(".five").css("background-color","hsl(210, 11%, 26%)");
        $(".five").css("color","hsl(216, 12%, 54%)");
    }
    lastSelected = 1;
})



$(".two").click(function(){
    $(".two").css("background-color","hsl(25, 97%, 53%)");
    $(".two").css("color","white");
    if(lastSelected!=2){
        $(".one").css("background-color","hsl(210, 11%, 26%)");
        $(".one").css("color","hsl(216, 12%, 54%)");
        $(".three").css("background-color","hsl(210, 11%, 26%)");
        $(".three").css("color","hsl(216, 12%, 54%)");
        $(".four").css("background-color","hsl(210, 11%, 26%)");
        $(".four").css("color","hsl(216, 12%, 54%)");
        $(".five").css("background-color","hsl(210, 11%, 26%)");
        $(".five").css("color","hsl(216, 12%, 54%)");
    }
    lastSelected = 2;
})



$(".three").click(function(){
    $(".three").css("background-color","hsl(25, 97%, 53%)");
    $(".three").css("color","white");
    if(lastSelected!=3){
        $(".one").css("background-color","hsl(210, 11%, 26%)");
        $(".one").css("color","hsl(216, 12%, 54%)");
        $(".two").css("background-color","hsl(210, 11%, 26%)");
        $(".two").css("color","hsl(216, 12%, 54%)");
        $(".four").css("background-color","hsl(210, 11%, 26%)");
        $(".four").css("color","hsl(216, 12%, 54%)");
        $(".five").css("background-color","hsl(210, 11%, 26%)");
        $(".five").css("color","hsl(216, 12%, 54%)");
    }
    lastSelected = 3;
})



$(".four").click(function(){
    $(".four").css("background-color","hsl(25, 97%, 53%)");
    $(".four").css("color","white");
    if(lastSelected!=4){
        $(".one").css("background-color","hsl(210, 11%, 26%)");
        $(".one").css("color","hsl(216, 12%, 54%)");
        $(".two").css("background-color","hsl(210, 11%, 26%)");
        $(".two").css("color","hsl(216, 12%, 54%)");
        $(".three").css("background-color","hsl(210, 11%, 26%)");
        $(".three").css("color","hsl(216, 12%, 54%)");
        $(".five").css("background-color","hsl(210, 11%, 26%)");
        $(".five").css("color","hsl(216, 12%, 54%)");
    }
    lastSelected = 4;
})


$(".five").click(function(){
    $(".five").css("background-color","hsl(25, 97%, 53%)");
    $(".five").css("color","white");
    if(lastSelected!=5){
        $(".one").css("background-color","hsl(210, 11%, 26%)");
        $(".one").css("color","hsl(216, 12%, 54%)");
        $(".two").css("background-color","hsl(210, 11%, 26%)");
        $(".two").css("color","hsl(216, 12%, 54%)");
        $(".three").css("background-color","hsl(210, 11%, 26%)");
        $(".three").css("color","hsl(216, 12%, 54%)");
        $(".four").css("background-color","hsl(210, 11%, 26%)");
        $(".four").css("color","hsl(216, 12%, 54%)");
    }
    lastSelected = 5;
})


$(".submit").click(function(){
    $(".all").css("visibility","hidden")
    $(".submitted").css("visibility","visible")
    $(".selected").text("You selected " + lastSelected + " out of 5");
})
