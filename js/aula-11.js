console.log(
    //retorna os nós que são filhos de um nó
    //nodeList é uma lista ordenada de nós
    document.body.childNodes
)

//conseguimos retornar o numero de nós de um objeto, do nodelist
let lista = document.body.childNodes
//alert(lista.length)

// para retornar o conteudo
// alert(lista[5].innerHTML)

// nome do nó
// alert(lista[5].nodeName)

// tipo do nó
// alert(lista[1].nodeType)

// retorna nulo para nós de elemento 
// retorna o valor de um atributo para nó de atributo
// pode retornar o conteudo em caso de nós de texto ou comentário
// alert(lista[1].nodeValue)

alert(lista[5].childNodes[3].childNodes[0].nodeValue)