
/*function cliclou(){
    var titulo = document.querySelector("#texto").value
    var botao1 = document.querySelector("#botao").value
    var caixa = document.querySelector('#pp')
    caixa.innerText = titulo
}*/

/*var strLista = "igo";

var listaSubstituicao = {
    a:"ai",
    e:"enter",
    i:"imes",
    o:"ober",
    u:"ufat"
}


alteracaoLista = strLista.replace(/a|e|i|o|u/gi, function(item){
    let it = listaSubstituicao[item];
    let itemLista = it.replace(/(?:^|\s)\S/g, function(elemento) { return elemento.toUpperCase(); });
    return itemLista;
});
console.log(alteracaoLista);*/



function loadpk(){
    let numero1 = document.getElementById('numero1').value
    url = `https://pokeapi.co/api/v2/pokemon/${numero1}`
    fetch(url)
    .then((response) => {return response.json()})

    .then((data) =>{
        document.getElementById('nome').innerHTML = data['name']
        let img = data['sprites']['front_default']
        document.getElementById('pic').setAttribute('src',img)
    })

    .catch((erro) => {
        console.log('erro:'+ erro)
    })
}

/*var contador = 0

function increment(){
    updateDisplay(++contador)
}
function dessencremento(){
    updateDisplay(--contador)
}

function updateDisplay(val){
    document.getElementById("counter-label").innerHTML = val
}*/

document.getElementById('btn1').onclick = loadpk



