const input = document.getElementById("search");
const button = document.getElementById("btn");
const result = document.querySelector(".result");
const api = "https://pokeapi.co/api/v2/pokemon/";

button.addEventListener("click", function(){
    if(input.value == ""){
        getEveryPokemon()
    }else{
        getOnePokemon()
    }
});

async function getEveryPokemon(){
    const res = await fetch(api);
    const data = await res.json();
    
    console.log(data);

    let output = "";

    data.results.forEach((item) => {
        output += `
            <div class="poke-result">
                <h4>${item.name}</h4>
                <a href="${item.url}">${item.url}</a>
            </div>
        `
    });

    result.innerHTML = output;
}

async function getOnePokemon(){
    const data = await fetch(api + input.value)
    .then((res) => {
        if(res.ok){
            return res.json();
        }
    })

    console.log(data);

    let output = `
        <div class="pokemon-result">
            <img src="${data.sprites.front_default}"/>
            <h4>${data.name}
        </div>
    `;

    result.innerHTML = output;

    input.value = "";
}