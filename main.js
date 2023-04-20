//função em JavaScript
function tocaSom(idElementoAudio){
    document.querySelector(idElementoAudio).play();
}

//querySelectorAll - Selecionas todos elementos, seja de classe tag ou Id.
//declaração const não muda é constante 
const listaDeTecla = document.querySelectorAll('.tecla');



for(let contador = 0; contador < listaDeTecla.length; contador++){
    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;
    tecla.onclick = function (){
        tocaSom(idAudio);
    }
    
    tecla.onkeydown = function (event) {
        if(event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa')
        }
     
    }
    tecla.onkeyup = function () {
        tecla.classList.remove('ativa')
    }
}

/* 
let contador = 0 
//enquanto
while(contador < listaDeTecla.length){

    const tecla = listaDeTecla[contador];
    const instrumento = tecla.classList[1];

    //templete string 
    const idAudio = `#som_${instrumento}`
    tecla.onclick = function () {
        tocaSom(idAudio);
    };
    contador += 1;
    
}

*/