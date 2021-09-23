<?php
	
	//FUNÇÃO SÉCULO-ANO
	//Chamando a função com um ano válido, ela retorna o século ao qual o ano pertence
	
	function SeculoAno($ano){
		$seculo = ceil($ano/100);
		echo "Ano $ano = século $seculo";
	}
	
	SeculoAno(1500);
	
?>