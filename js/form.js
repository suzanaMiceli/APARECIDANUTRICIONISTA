// criamos uma var no botão. depois adicionamos um evento pra quando o usuári clicar
//depois declaramos uma função anonima chamada event para pode previnir o comportamento padrão do botão que é atualizar automáticamente
// agr vamos puxar os dados do formulário lá do html e criar appendchild pra quando o clliente apetar o botão,
//essa declaroções indica que eles está puxando de dentro do form, o nome e o valor que contem nele	
// os dados selecionados irão pro formulário como appendchild puxando o sdados do input. no caso a classe do input

var botaoAdicionar = document.querySelector("#adicionar-paciente");

botaoAdicionar.addEventListener("click", function(event){	
	event.preventDefault();



	var form = document.querySelector("#form-adiciona");

	//extraindo informações do form

	var paciente = obtemPacienteDoFormulario(form);
	console.log(paciente);

	
	// agr vamos pegar toda essa tr nova e colocar dentro do tbody do html fazendo o mesmo esquema

	// declaramos uma var erro que quando o return da função Valida Paciente tiver uma string de tamanho mairo que 0 vai ter o resultado que pedimos
	var erros = validaPaciente(paciente);
	console.log(erros);

	if (erros.length > 0){
		exibeMensagensDeErro(erros);
		return;

	}


adicionaPacienteNaTabela(paciente);


form.reset(); //apaga os dados do form depois que vc clica em adc
	//aqui ele vai limpar as mensagens de erro usando o innerHTML=""
var mensagemErro = document.querySelector("#mensagens-erro");
mensagemErro.innerHTML = "";

});

//agr vamos criar um objeto. objeto é tudo aquilo que sempre tem características semelhantes. ou seja, todo paciente vai ter as mesmas propriedades.
//assim fica mehor pra se trabalhar. e na linha 17 chamaremso a função
function obtemPacienteDoFormulario(form){

	var paciente = {
		nome: form.nome.value,
		peso: form.peso.value,
		altura: form.altura.value,
		gordura: form.gordura.value,
		imc: calculaImc(form.peso.value, form.altura.value)

	}
	return paciente;
}

function montaTr(paciente){

	//para criar uma linh com novos dados, precisamos criar uma tr e por isso vamos utilizar a função creatElement
	// e precisamos tbm criar as tds
	//CRIA TR E TD
	//criamos uma função chamado montaTr. e nela a gente declara a var, cria o elemento tr
	//e adc uma classe. 
	// após nos colocamos ele como apendchild e dentro dela a gente chama a função monta td
	// e a função montaTd vai adicionando a classe nos dados
	
	var pacienteTr = document.createElement("tr");
	pacienteTr.classList.add("paciente"); //aqui estamos adicionando uma classe p/ ficar igual ao do html e responder igual no css
	

	pacienteTr.appendChild(montaTd(paciente.nome, "info-nome"));
	pacienteTr.appendChild(montaTd(paciente.peso, "info-peso"));
	pacienteTr.appendChild(montaTd(paciente.altura, "info-altura"));
	pacienteTr.appendChild(montaTd(paciente.gordura, "info-gordura"));
	pacienteTr.appendChild(montaTd(paciente.imc, "info-imc"));

	return pacienteTr;
}
	// agora precisamos declarar que o nometd é o conteúdo da form.nome.value (var nome) para que a td seja preenchida
	// essa declaração fica assim pelo html <td>nome<td>

function exibeMensagensDeErro(erros){
	var ul = document.querySelector("#mensagens-erro");
	ul.innerHTML = ""; //permite deixar a ul do html em branco (ELE NAO VAI REPETIR A MENSAGEM DE ERRO)
	
	//forEach é como se fosse o for, mas sem declarar o tamanho. No caso para cada item do array ele vai fazer alguma coisa
	// no caso vamos pedir pra ela executar a função de criar uma li var erro dentro dele;
	erros.forEach(function(erro){
		var li = document.createElement("li");
		li.textContent = erro;
		ul.appendChild(li);

	})
}



function adicionaPacienteNaTabela(paciente) {
    var pacienteTr = montaTr(paciente);
    var tabela = document.querySelector("#tabela-pacientes");
   // ADICIONANDO O PACIENTE NA TABELA
	tabela.appendChild(pacienteTr);
}


function montaTd(dado, classe) {
	var td = document.createElement("td");
	td.textContent = dado;
	td.classList.add(classe);

	return td;
}
// essa função ele cria um array de erros. se o if for negativo ele push(empurra) a string dentro do array
function validaPaciente(paciente){
	//criamos um arry pq queremos que exiba mais de uma mensagem de erro
    var erros = [];

    if (paciente.nome.length == 0){
    	erros.push("Nome inválido")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("Peso inválido");
    }
    if (paciente.altura.length == 0){
    	erros.push("Altura inválida");
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("Altura é inválida");
    }

    if (paciente.gordura.length == 0){
    	erros.push("Percentual de gordura inválido");
    }
       if (paciente.peso.length == 0){
    	erros.push("Peso inválido");
    }
    return erros;
}
