function loadpk(){
    let numero1 = document.getElementById('numero1').value
    url = `https://pokeapi.co/api/v2/pokemon/${numero1}`
    fetch(url)
    .then((response) => {return response.json()})

    .then((data) =>{
        document.getElementById('nome').innerHTML = data['name']
        document.getElementById('pic').setAttribute('src',data.sprites.other.dream_world.front_default)
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



