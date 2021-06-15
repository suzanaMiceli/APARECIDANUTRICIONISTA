var botaoAdicionar = document.querySelector("#buscar-paciente");

botaoAdicionar.addEventListener("click", function(){
	console.log("fuiclicado");
	//o new xmlhttpRequest é um objeto do js responsável por fazer requisições HTTP. TEMOS QUE CONFIGURAR PRA ELE FAZER A REQUISIÇÃO
	var xhr = new XMLHttpRequest();

	xhr.open("GET", "https://api-pacientes.herokuapp.com/pacientes");// abre a conexao p o endereço e o tipo da requisição que É GET e o endereço
	
	xhr.addEventListener("load", function(){    //e adc um evento de que quando ele carregar ele vai mostrar os dados no console
		
		//STATUS == 200 é o cód que deu certo a requisição. como 404 qué é quando dá ero
		if (xhr.status == 200){

			var resposta = xhr.responseText;
			var pacientes = JSON.parse(resposta); //O método JSON.parse() analisa uma string JSON, construindo o valor ou um objeto JavaScript descrito pela string. 
			//entao a gente pega esse objeto e jogarmos na tabela usando a função de adc na tabela e usamos o forEach pra ele fazer com todos eles.	

			pacientes.forEach(function(paciente){

				adicionaPacienteNaTabela(paciente);
			});
		} else {
            erroAjax.classList.remove("invisivel"); // se der erro ele vai tirar a classe invisível e vai mostrat a mensagem de erro
        }

	});

	xhr.send(); // ele pega a requisição acima e envia
})