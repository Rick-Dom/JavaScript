
//o innerHTML usamos bastante para pegar o que esta dentro de algum elemento
//mas tbm podemos usar para atribuir um novo valor

//alert(document.getElementById("p1"))
//document.getElementById("p1").innerHTML = "novo conteudo"

//DEIXANDO MAIS ORGANIZADO, TERIAMOS ALGO ASSIM

var paragrafo = document.getElementById("p1")
paragrafo.innerHTML = "novo conteudo"

//mudando as propriedades do elementi
paragrafo.style.color = "green"
paragrafo.style.fontSize = "2em"

//ou seja, conseguimos inserir propriedades (estilos) nos elemento do HTMl facilmentos
//alem disso, ainda podemos adicionar atributos nas tags por aqui usando a mesma lógica
