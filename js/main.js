const listaPokemon = document.querySelector('#listaPokemon');
const url = 'https://pokeapi.co/api/v2/pokemon/';

for (let i = 1; i < 151; i++) {
    fetch(url + i)
        .then((responde) => responde.json())
        .then(data => mostrarPokemon(data))
}


const mostrarPokemon = (data) => {
    const tipos = data.types.map(type=> type.type.name)
    console.log(tipos)
    const div = document.createElement('div');
    div.classList.add('pokemon');
    div.innerHTML = `<p class="pokemon-id-back">#${data.id}</p>
                    <div class="pokemon-imagen">
                        <img src="${data.sprites.other['official-artwork'].front_default}" alt="${data.name}">
                    </div>
                    <div class="pokemon-info">
                        <div class="nombre-contendor">
                            <p class="pokemon-id">#${data.id}</p>
                            <h2 class="pokemon-nombre">${data.name}</h2>
                        </div>
                        <div class="pokemon-tipos">
                            <p class="electric tipo">ELECTRIC</p>
                            <p class="fighting tipo">FIGHTHING</p>
                        </div>
                        <div class="pokemon-stats">
                            <p class="stat">${data.heigh}m</p>
                            <p class="stat">${data.weight}kg</p>
                        </div>
                    </div>`;
                    listaPokemon.append(div)
}
