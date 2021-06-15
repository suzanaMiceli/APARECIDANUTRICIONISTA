var tabela = document.querySelector("table");
// aqui adicionamos um evento de 2clicks
//criamos a função event(2clicks).target(alvo do click).parentnod(seleciona o pai do event, no caso a linha).classList(p adc uma animação)
//depois colocamos setTimeout pra que quando executarmos a função de remover ele demore 500ms para ocorre
tabela.addEventListener("dblclick",function(event){
    event.target.parentNode.classList.add("fadeOut");

    setTimeout(function(){
    	event.target.parentNode.remove()
    }, 500);
    
});