let title = document.createElement('title');
title.textContent = 'Etch a Sketch!'
document.documentElement.insertBefore(title, document.body);

let pageTitle = document.createElement('h1')
pageTitle.id = "pageTitle";
pageTitle.textContent = "Etch a Sketch!"
document.body.insertBefore(pageTitle, document.querySelector('#boxContainer'));

let button = document.createElement('button');
button.id = "resetButton";
button.textContent = 'Reset Grid Size Here!'
document.getElementById('buttonBox').appendChild(button);

function resetButton(){
    document.querySelector('#boxContainer').innerHTML = '';
};

function createGrid(){
let gridSize = parseInt(prompt('How big do you want your width and height for the box to be?'));
    if(gridSize>=100){
        alert('Your value is too high!');
        document.querySelector('#boxContainer').remove();
        return;
    };
    for(i = 0; i<gridSize; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for(j = 0; j<gridSize; j++){
            let square = document.createElement('span');
            square.className = 'square';
            row.appendChild(square);
        }
        document.querySelector('#boxContainer').appendChild(row);
    }
};

function startGrid(){
    for(i = 0; i<4; i++){
        let row = document.createElement('div');
        row.className = 'row';
        for(j = 0; j<4; j++){
            let square = document.createElement('span');
            square.className = 'square';
            row.appendChild(square);
        }
        document.querySelector('#boxContainer').appendChild(row);
    }
};

function changeColor(e){
    e.target.style.backgroundColor = 'rgb(220, 190, 240)';
};

window.addEventListener('load',() => {
    startGrid();
});
boxContainer.addEventListener('mouseover', changeColor);
button.addEventListener('click', () => {
    resetButton();
    createGrid();
});
