let mouseDown = false;
document.body.onmousedown = () => (mouseDown = true);
document.body.onmouseup = () => (mouseDown = false);


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


const announceGridSize = () => {
    if (document.querySelector('.grid-size') != null) {
        header.removeChild(header.lastChild)
    }
    const para = document.createElement('p')
    para.classList.add('grid-size')
    para.textContent = `${gridWidth} x ${gridWidth}`
    header.appendChild(para)

}


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
    let pixel = 1;
    if (!gridWidth) gridWidth = 16;

    for (let i = 1; i <= gridWidth; i++) {
    const makeRow = document.createElement('div');
    makeRow.classList.add(`row${i}`,'row');
        for (let j = 1; j <= gridWidth; j++) {
            const makeBox = document.createElement('div');
            makeBox.classList.add('box',`pixel${pixel}`);
            pixel++
            const box = document.querySelector('.box');
            makeRow.appendChild(makeBox);
           
            makeBox.addEventListener('mouseover', colorSquare)
            makeBox.addEventListener('mousedown', colorSquare)
            
        };  
    grid.appendChild(makeRow);
    announceGridSize()
}};

const colorSquare = (e) => {
    console.log(e.type)
    if (e.type == 'mouseover' && !mouseDown) return
    e.target.classList.toggle('active')
    
};



gridCreateButton.addEventListener('click', removeCurrentGrid);
gridCreateButton.addEventListener('click', changeInputNumber)
gridCreateButton.addEventListener('click', createNewGrid);




document.body.onload = () => {createNewGrid()}
