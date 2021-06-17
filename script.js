function createSquare(){
    for(i = 0; i < 16; i++){
        let square = document.createElement('span');
        square.classList.add('square');
        square.textContent = ('box');
        document.getElementById('boxContainer').appendChild(square);
    }   
};

createSquare();

