//vamos declarar uma função que chamada getLocation, que será responsavel por obter a localização do usuario
//

function Geolocation(){
    //testar se não existe a localização
    if(!navigator.geolocation)
    return null
    //se ele passar pelo erro,pegamos a localização
    //esta função chama o metodo getCurrentPosition do objeto navigator.geolocation
    navigator.geolocation.getCurrentPosition(function(pos){
        //A seguir vamos selecionar o elemento HTML com o ID "lat" e atualizar o seu conteúdo de texto(Innertext) com a latitude obtida
        //a partir do objeto position (pos.coords.latitude)
    document.getElementById("lat").innerText=pos.coords.latitude 

        //A seguir vamos selecionar o elemento HTML com o ID "long" e atualizar o seu conteúdo de texto(Innertext) com a longitude obtida
        //a partir do objeto position (pos.coords.latitude)
    document.getElementById("long").innerText=pos.coords.longitude 
    })
}