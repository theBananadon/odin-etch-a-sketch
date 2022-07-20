const container = document.querySelector('#TileHolder');

createTiles();




function createTiles(){
    for(let i = 0; i < 16; i++){
        const divs = document.createElement('div');

        divs.textContent = 'hello';


        divs.style.cssText = "background-color: black; ; color: white;";

        container.appendChild(divs);



    }
}