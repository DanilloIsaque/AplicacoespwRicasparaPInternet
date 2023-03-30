var lat
var log


//vamos declarar uma função que chamada getLocation, que será responsavel por obter a localização do usuario
function getLocation(){
    //testar se não existe a localização
    if(!navigator.geolocation)
    return null

    //se ele passar pelo erro,pegamos a localização
    //esta função chama o metodo getCurrentPosition do objeto navigator.geolocation
    navigator.geolocation.getCurrentPosition(function(pos){
        //A seguir vamos selecionar o elemento HTML com o ID "lat" e atualizar o seu conteúdo de texto(Innertext) com a latitude obtida
        //a partir do objeto position (pos.coords.latitude)
    lat = document.getElementById("lat").innerText=pos.coords.latitude 

        //A seguir vamos selecionar o elemento HTML com o ID "long" e atualizar o seu conteúdo de texto(Innertext) com a longitude obtida
        //a partir do objeto position (pos.coords.latitude)
    log = document.getElementById("log").innerText=pos.coords.longitude 
    initMap()
    })
}

function initMap() {
// The location of Uluru
const uluru = { lat: lat, lng: lon };

// The map, centered at Uluru
map = new google.maps.Map(document.getElementById("map"), {
  zoom: 15,
  center: uluru,
});
// The marker, positioned at Uluru
const marker = new google.maps.Marker({
  position: uluru,
  map: map,
});
}
getLocation()
