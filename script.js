// Vou selecionar qual class ou div eu quero capturar na página HTML para poder manipular.
const selecionandoMInhaClassOuId = document.querySelector('.exibirMinhaUrlAqui');

// Estou atribuindo a variável o valor capturado pelo metódo window.location.href
let capturarArmazenarUrlAqui = window.location.href;


/*
	Na primeira parte selecionandoMinhaClassOuID estou selecionando class(.class) 
    ou id(#id) que eu quero manipular com o javascript.

	Na segunda parte estou acessando o método innerHTML para inserir a informação na 
    posição onde está essa class ou ID.

	Depois da igualdade, estou informando a informação que quero que vá para
     ser inserido no HTML, que é a informação da URL que foi capturado pelo 
     método window.location.hfre
*/

selecionandoMInhaClassOuId.innerHTML = capturarArmazenarUrlAqui;