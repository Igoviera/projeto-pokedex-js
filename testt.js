
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
    fetch(`https://pokeapi.co/api/v2/pokemon/${numero1}`)
    .then((response) => response.json())

    .then((data) =>{

        let statName = ''
        let baseStat = ''
        data.stats.forEach(element => {
            statName += element.stat.name+'<br>'
            baseStat +=  element.base_stat+'<br>'
            document.getElementById('hp').innerHTML = statName
            document.getElementById('valor').innerHTML = baseStat
          
        });

        
           
        document.getElementById('nome').innerHTML = data.name
        document.getElementById('pic').setAttribute('src',data.sprites.other.dream_world.front_default)
   


        const carat = data.map(data => data.stats)
        console.log(carat)

    })    
    .catch((erro) => {
        console.log('erro:'+ erro)
    })
}



document.getElementById('btn1').onclick = loadpk



