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
const hamburger = document.getElementById('hamburger');
        const menu = document.getElementById('menu');

        hamburger.addEventListener('click', () => {
            menu.classList.toggle('active');
            hamburger.classList.toggle('active');
        });
