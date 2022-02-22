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




