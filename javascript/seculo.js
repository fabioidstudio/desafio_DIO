
	//FUNÇÃO SÉCULO-ANO
	//Chamando a função com um ano válido, ela retorna o século ao qual o ano pertence
	
	function seculo(){
		var escolhido = document.querySelector("#ano").value;
		var resultado = Math.ceil(escolhido/100);
		document.querySelector("#valor").innerHTML = "O ano " +escolhido+ " pertence ao século " +resultado;
	}
