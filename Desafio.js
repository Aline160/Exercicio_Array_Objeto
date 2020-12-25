// DESAFIO - validador de cartão de crédito

// Todos os números de cartão de crédito têm uma sequência que pode ser validada através de um algoritmo chamado Algoritmo de Luhn.
// Para validar qualquer número de cartão de crédito (o padrão de 16 dígitos), siga os seguintes passos:

// 1. Retire o último dígito do número. Ele é o verificador;
// 2. Escreva os números na ordem inversa;
// 3. Multiplique os dígitos das casas ímpares por 2 e subtraia 9 de todos os resultados maiores que 9;
// 4. Some todos os números;
// 5. O dígito verificador (aquele do passo 1) é o número que você precisa somar a todos os outros números somados para fazer a validação;
// 6. O número de cartão de crédito será válido caso o total (do passo 5) seja múltiplo de 10 (ou seja, numero % 10 === 0)

// Números de cartões válidos para teste:

// 5555666677778884
// 5485755481460022
// 5141331902596939
// 5381579886310193
// 5261400319746371

const numeroCartao= [5555666677778884, 5485755481460022, 5141331902596939, 5381579886310193, 5261400319746371 ]


function CheckCard (num) {
    const array= num
	const arrayCartao = []
	const verificador = []
	const invertendo = []
	const multiplicador= []
	const todososMultiplicados=[]
	
		for (let i = 0; i < num.length; i++) {
	
	arrayCartao.push (num[i].toString(). split (''))
	verificador.push (arrayCartao[i].pop ())
	invertendo.push (arrayCartao[i].reverse())

		}

	for( let j =0 ;j<invertendo.length;j++){

	for (let i = 0; i < invertendo[j].length; i++){
		if (i%2!=0){
			var mult=parseInt(invertendo[j][i])*2
 if (mult < 9) {
			multiplicador.push (mult)
		} else{
			var subtraido= mult-9
			multiplicador.push (subtraido)
		}
	}

	

}
const total = multiplicador.reduce((total,currentElment)=>total+currentElment)
t = num[j].toString().split('')
verificadorFinal =t[t.length-1]

totalSomado = total + parseInt(verificadorFinal)
todososMultiplicados.push(totalSomado)

}

for(let h = 0;h<todososMultiplicados.length;h++){
	if(todososMultiplicados[h]%2==0){
		console.log("CARTAO VALIDO")
	}
	else{
		console.log("CARTAO INVALIDO")
	}
}
}
	
	console.log(CheckCard(numeroCartao,1))
	