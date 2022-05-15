const makeRoot = document.createElement('div');
makeRoot.classList.add('root');
document.body.appendChild(makeRoot)
const root = document.querySelector('.root');


let gridWidth;
const checkInputNumber = () => {
    gridWidth = prompt('Enter a number up to 100 to create the length of an X by X grid.')
    if (gridWidth > 100) {
        alert('Number too large');
        checkInputNumber()
    }};
checkInputNumber()

for (let i = 1; i <= gridWidth; i++) {
    const makeCol = document.createElement('div');
    makeCol.classList.add(`column${i}`,'column');
    for (let j = 1; j <= gridWidth; j++) {
            const makeBox = document.createElement('div');
            makeBox.classList.add(`row${j}`,'box');
            const column = document.querySelector('column');
            makeCol.appendChild(makeBox);
        }
    root.appendChild(makeCol);
   
}

let columnsLength = document.getElementsByClassName('column');


    