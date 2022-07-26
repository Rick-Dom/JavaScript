var p = document.createElement("p")
p.innerHTML = "Olá pessoal"


var img = document.createElement("img")
img.src = "img/js.png"
//appendChild serve para adicionar um elemento filho a um elemnto pai
//div é pai do paragrafo

//removeChild tira o elemento filho

document.getElementById("conteudo").appendChild(p)
document.getElementById("conteudo").appendChild(img)

//removendo
document.getElementById("conteudo").removeChild(img)

// fazendo aparecer no console

console.log(
    p, img
)