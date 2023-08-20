var setaDireita = window.document.getElementById("right-arrow")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var Bruna = window.document.getElementById("Bruna")
var setaEsquerda = window.document.getElementById("left-arrow")

function RolarParaDireita(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    setaDireita.style = "display:none"
    setaEsquerda.style = "display:flex; margin-top:125px"
}

function RolarParaEsquerda(){
    Bruna.style = "display:none"
    Leonardo.style = "display:flex"
    setaEsquerda.style = "display:none"
    setaDireita.style = "display:flex"
}