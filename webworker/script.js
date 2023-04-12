script1 = new Worker("script1.js");

function calcularQuadrado() {
    
    script1.postMessage(document.getElementById('inputNumber1').value);

}

script1.addEventListener('message', function(event){
    const quadrado = event.data
    document.getElementById("resultado1").textContent=('O quadrado do número digitado é:' + quadrado)   
})

script2 = new Worker("script2.js");

function calcularFatorial() {
    
    script2.postMessage(document.getElementById('inputNumber1').value);

}

script2.addEventListener('message', function(event){
    const fatorial = event.data
    document.getElementById("resultado2").textContent=('O fatorial do número digitado é: ' + fatorial)   
})

