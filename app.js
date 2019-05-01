function initMap () {
    var location = {lat: 38.871857, lng: -77.056267};
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 14,
        center: location
        
    });
    
}


$(window).scroll(function(){
    if($(this).scrollTop() > 100){
        $('#scroll').fadeIn();
    }else{
        $('#scroll').fadeOut();
    }
});

$('#scroll').click(function(){ 
    $("html, body").animate({ scrollTop: 0 }, 600); 
    return false; 
});

$(document).ready(function(){
    $(window).scroll(function(){
        if($(this).scrollTop() > 100){
            $('#scroll').fadeIn();
        }else{
            $('#scroll').fadeOut();
        }
    });
    $('#scroll').click(function(){
        $("html, body").animate({ scrollTop: 0 }, 600);
        return false;
    });
});