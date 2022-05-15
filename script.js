


const makeRoot = document.createElement('div');
makeRoot.classList.add('root');
document.body.appendChild(makeRoot);
const root = document.querySelector('.root');


const makeHeader = document.createElement('div');
makeHeader.classList.add('header')
root.appendChild(makeHeader)

const makeGridCreateButton = document.createElement('button');
makeGridCreateButton.classList.add('btn','grid-create-button');
header = document.querySelector('.header');
header.appendChild(makeGridCreateButton)

const gridCreateButton = document.querySelector('.grid-create-button')
gridCreateButton.textContent = 'Change grid height'

const makeGrid = document.createElement('div');
makeGrid.classList.add('grid');
root.appendChild(makeGrid)
const grid = document.querySelector('.grid')

const makeFooter = document.createElement('div');
makeFooter.classList.add('footer');
root.appendChild(makeFooter)


let gridWidth;


const changeInputNumber = () => {
    gridWidth = prompt('Enter a number up to 100 to create the length of an X by X grid.')
    if (isNaN(gridWidth)) {
        alert('input must be a number')
        changeInputNumber()
    };
    if (gridWidth > 100) {
        alert('Number too large');
        changeInputNumber()
    }};

const removeCurrentGrid = () => {
    let myNode = document.querySelector('.grid');
    while (myNode.firstChild) {
        myNode.removeChild(myNode.lastChild)
    }};

const createNewGrid = () => {
    changeInputNumber();
    for (let i = 1; i <= gridWidth; i++) {
    const makeRow = document.createElement('div');
    makeRow.classList.add(`row${i}`,'row');
        for (let j = 1; j <= gridWidth; j++) {
            const makeCol = document.createElement('div');
            makeCol.classList.add(`column${j}`,'box');
            const row = document.querySelector('row');
            makeRow.appendChild(makeCol);
        };
    grid.appendChild(makeRow);
}};

gridCreateButton.addEventListener('click', removeCurrentGrid);
gridCreateButton.addEventListener('click', createNewGrid);


