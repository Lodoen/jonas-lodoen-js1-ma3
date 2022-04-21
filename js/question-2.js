const list = document.querySelector(".list");
const key = "9a475d5629c14cca8f0b9d8cd7904e42";
const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating&key="+key;
const numberOfGames = 8;

async function getGames(){
    let html = "<h1>List of games</h1>";
    
    try{
        const response = await fetch(url);
        const data = await response.json();
        const results = data.results;

        for(let i = 0; i < numberOfGames; i++){
            let game = results[i];

            let name = "No name given";
            if(game.name){
                name = game.name;
            }

            let rating = "No rating set";
            if(game.rating){
                rating = game.rating;
            }

            let numberOfTags = "No tags set";
            if(game.tags){
                numberOfTags = game.tags.length;
            }

            html += `
                <div class="game">
                    <h2>${name}</h2> 
                    <p><span class="bold">Rating:</span> ${rating}</p>
                    <p><span class="bold">Number of tags:</span> ${numberOfTags}</p>
                </div>`;
        }
    }
    catch(error){
        html += `
            <div class="error">
                <p>Oops! There was an error.</p>
                <p><span class="bold">Error: </span>${error}</p>
            </div>
        `;
    }

    list.innerHTML = html;
}

getGames();