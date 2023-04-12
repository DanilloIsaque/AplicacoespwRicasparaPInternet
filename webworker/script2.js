// 

addEventListener('message', function(event){
    const inputNumber1 = event.data
    var fatorial = 1
    for(var i = 1; i <= inputNumber1; i++){
        fatorial *= i
    }

    postMessage(fatorial)
});