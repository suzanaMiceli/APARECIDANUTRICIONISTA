var titulo = document.querySelector(".titulo");

titulo.textContent = "Aparecida Nutricionista";
// primeiro eu vou selecionar a seleção que eu quero, depois vou dizer que a variavel = o conteúdo daquele
//daquela seleção usando o textContent.
var pacientes = document.querySelectorAll(".paciente");
//nós sutilizamos a função loop pra ele percorrer a todos os pacientes da lista
//criamos um var qualquer que começa em 0 e dizemos que ela vai até o tamanho total da lista
// depois colocamos i== para que ele possa avançar para o próximo paciente.
// pra ficar mais fácil, declaramos que var paciente = i para que a função ocorra bem


var pacientes = document.querySelectorAll(".paciente");

for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i];

	var tdPeso = paciente.querySelector(".info-peso");
	var peso = tdPeso.textContent;

	var tdAltura = paciente.querySelector(".info-altura");
	var altura = tdAltura.textContent;
	
	var tdImc = paciente.querySelector(".info-imc");
	// nós colocamos funções ao invés de colocar a var = true. para ser mais eficiente

	var pesoEvalido = validaPeso(peso);
	var alturaEvalida = validaAltura(altura);
	
	// o ! ele iverte as coisa, no caso ele só vai funcionar se a função validaPeso for false
	p
	if (!pesoEvalido) {
		pesoEvalido = false;
		tdImc.textContent = "Peso inválido!";
		paciente.classList.add("paciente-invalido");
	}

	if (!alturaEvalida) {
		alturaEvalida = false;
		tdImc.textContent = "Altura inválida!"
		paciente.classList.add("paciente-invalido");
	}

    if (alturaEvalida && pesoEvalido) {
		var imc = calculaImc(peso, altura);
		// toFixed ser pra dizer quantas casas decimais vc quer.
		tdImc.textContent = imc;
	}
}

function calculaImc(peso, altura){
	var imc = 0;
	imc = peso/(altura * altura);	
	return imc.toFixed(2);
}

function validaPeso(peso){
	if (peso >= 0 && peso < 1000){
		return true;
	} else{
		return false;
	}
}

function validaAltura(altura){
	if (altura >=0 && altura <= 3.0){
		return true;
	} else {
		return false;
	}
	
}

