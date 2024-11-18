fetchData();

async function fetchData(){

    try{

        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch("https://pokeapi.co/api/v2/pokemon/${}")

        if(!response.ok){
            throw new Error('Could not fetch resource')

        }
        
        const data = await response.json();
        console.log(data);

    }
    catch(error){
        console.error(error);

    }

}