var campoFiltro = document.querySelector("#filtrar-tabela");
// adc um evento de nput, depois vamos dizer que se o valor do input for >0 ele vai trzaer o nome, cado contrário ele vai adc uma classe que deixa invisível
campoFiltro.addEventListener("input", function(){
    console.log(this.value);
    var pacientes = document.querySelectorAll(".paciente");

    if (this.value.length > 0){
        for (var i = 0; i < pacientes.length; i++){
            var paciente = pacientes[i];
            var tdNome = paciente.querySelector(".info-nome");
            var nome = tdNome.textContent;
            var expressao = new RegExp(this.value,"i"); //é uma expressao que busca os dados mesmo que seja as primeiras letra. E o "i" sig que pode ser maiúsc ou minuscula
            
            if (!expressao.test(nome)){ // aqui ele testa pora ver se na expressão aparece algo igual a algum nome ew retorna true or false
                paciente.classList.add("invisivel");
            } else {
                paciente.classList.remove("invisivel");
            }
        }
    } else {
        for (var i = 0; i < pacientes.length; i++) {// Aqui ele remove a classe invisível
            var paciente = pacientes[i];
            paciente.classList.remove("invisivel");
        }
    }
});