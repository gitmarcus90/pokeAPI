const searchForm = document.querySelector('form');
const pokeMon = document.querySelector('p')

const formSubmit = document.getElementById('submit')
formSubmit.addEventListener('click', fetchPoke)

function pokeCubone(e) {
    e.preventDefault()
        let pokeName = document.getElementById('pokeCubone').value
        console.log(pokeMon);
        fetch(`https://pokeapi.co/api/v2/pokemon/cubone`)
            .then(function (response) {
                console.log(response);
                return response.json();
            })
            .then(function (json) {
                console.log(json.weight)
                let weight = json.weight
            })
            .catch(error => {
                console.log(error);
            })
        
        function fetchPoke(weightJson) {
            console.log(weightJson);
            document.getElementById("cuboneWeight").innerText = "weight"
         }
    }