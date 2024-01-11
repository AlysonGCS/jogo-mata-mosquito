let largura = 0
let altura = 0
let vidas = 1
let tempo = 5

let criaMosquito = 1500

let nivel = window.location.search
nivel = nivel.replace('?', '')

if(nivel === 'normal'){
	criaMosquito = 1500
	console.log(criaMosquito)

} else if(nivel === 'dificil'){
	criaMosquito = 1000
	console.log(criaMosquito)

} else if(nivel === 'muitoDificil'){
	criaMosquito = 750
	console.log(criaMosquito)
}

function ajustarTamanho(){
	altura = window.innerHeight
	largura = window.innerWidth

	console.log('Altura: ' + altura + ' Largura: ' + largura)
}
ajustarTamanho()

setInterval(function(){
	document.getElementById('cronometro').innerHTML = tempo
	tempo = tempo - 1
	}, 1000 )

function posicaoRandomica(){
	if(document.getElementById('mosquito')){
		document.getElementById('mosquito').remove()
		document.getElementById('v' + vidas).src="imagens/coracao_vazio.png"
		console.log('vida perdida')
		vidas++
	}

	if(vidas >= 4){
		window.location.href = 'fimDeJogo.html'
	} 	
	if(tempo <= 0 && vidas <= 3){
		window.location.href = 'vitoria.html'
	}


	let posicaoX = Math.floor(Math.random() * largura) - 90
	let posicaoY = Math.floor(Math.random() * altura) - 90

	posicaoX = posicaoX < 0 ? 0 : posicaoX
	posicaoY = posicaoY < 0 ? 0 : posicaoY

	console.log(posicaoX +" "+ posicaoY)

	let mosquito = document.createElement('img')
	mosquito.src = 'imagens/mosca.png'
	mosquito.className = tamanhoAleatorio() + ladoAleatorio()
	mosquito.id = 'mosquito'
	mosquito.style.left = posicaoX + 'px'
	mosquito.style.top = posicaoY + 'px'
	mosquito.onclick = function(){
		this.remove()
	}

	document.body.appendChild(mosquito)

	tamanhoAleatorio()
}
function tamanhoAleatorio(){
	let classe = Math.floor(Math.random() * 3)

	switch(classe){
		case 0:
			return 'mosquito1'
		case 1:
			return 'mosquito2'
		case 2:
			return 'mosquito3'		
	}
}
function ladoAleatorio(){
	let classe = Math.floor(Math.random() * 2)

	switch(classe){
		case 0:
			return ' LadoA'
		case 1:
			return ' ladoB'		
	}
}