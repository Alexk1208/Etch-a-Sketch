function createSquare(gridSize){
    if(gridSize>=100){
        alert('Your value is too high!');
        document.querySelector('#boxContainer').remove();
        return;
    };
    let value = Math.pow(gridSize, 2)
    for(i = 0; i < value; i++){
        let square = document.createElement('span');
        square.classList.add('square');
        document.getElementById('boxContainer').appendChild(square);
    }   
};
let gridSizePrompt = parseInt(prompt('How big do you want your width and height for the box to be?'));
createSquare(gridSizePrompt);
