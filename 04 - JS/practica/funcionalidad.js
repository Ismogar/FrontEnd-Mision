function fetchPokemon() {
    const pokeNameInput = document.getElementById("name");
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then(
        (res) => {
            if (res.status != "200") {
                console.log(res);
                pokeImage("./imgs/pikachu.jpeg");
            }
            else {
                return res.json();
            }
        }
    ).then(
        (data) => {
            if (data) {
                console.log(data);

                let pokeImg = data.sprites.front_default;
                pokeImage(pokeImg);
                console.log(pokeImg);

                let types = data.types;
                pokeType(types);
                console.log(types);

                let stats = data.stats;
                pokeStats(stats);
                console.log(stats);

                let moves = data.moves;
                pokeMoves(moves);
                console.log(moves);
            } else {
                console.log(data);
                pokeImage("./imgs/pikachu.jpeg");
            }
        }
    );
}

function pokeMoves(moves) {
    const output = document.getElementsByClassName("movements")[0];
    output.innerHTML = "";

    for (let index in moves) {
        let div = document.createElement("div");
        div.setAttribute("class", "move");
        div.innerHTML = moves[index].move.name;
        output.appendChild(div);
    }
}

function pokeStats(stats) {
    const output = document.getElementsByClassName("output")[1];
    output.innerHTML = "";

    for (let index in stats) {
        let divStat = document.createElement("div");
        divStat.setAttribute("class", "stat");

        let label = document.createElement("label");
        label.innerHTML = chooseStat(stats[index].stat.name);
        divStat.appendChild(label);

        let div = document.createElement("div");
        div.setAttribute("id", stats[index].stat.name)
        div.innerHTML = stats[index].base_stat;
        divStat.appendChild(div);

        output.append(divStat);
    }
}

function chooseStat(name) {
    switch (name) {
        case "hp": return "PS";
        case "attack": return "ATK";
        case "defense": return "DEF";
        case "special-attack": return "SP.ATK";
        case "special-defense": return "SP.DEF";
        case "speed": return "SPEED";
        default: return "ERROR";
    }
}

function pokeImage(url) {
    const pokePhoto = document.getElementById("imgPokemon");
    pokePhoto.src = url;
}

function pokeType(types) {
    const output = document.getElementsByClassName("output")[0];
    output.innerHTML = "";

    var label = document.createElement('label');
    label.setAttribute("for", "type");
    label.innerHTML = "Tipo";

    output.appendChild(label);

    for (let index in types) {
        let div = document.createElement("div");
        div.setAttribute("class", types[index].type.name);
        div.setAttribute("id", "type");
        div.innerHTML = types[index].type.name;
        output.appendChild(div);
    }
}