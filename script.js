//guardando elementos
//var elemento = 50
//alert(elemento)
var elementosDuvida = document.querySelectorAll('.duvida');

elementosDuvida.forEach(function (duvida) {
    duvida.addEventListener('click', function (){
        duvida.classList.toggle('ativa')
    })
});

//function nome(argumento){
    //conteudo funçao
//}