const makeRoot = document.createElement('div');
makeRoot.classList.add('root');
document.body.appendChild(makeRoot)
const root = document.querySelector('.root');

for (let i = 1; i <= 16; i++) {
    const div = document.createElement('div');
    div.classList.add(`div${i}`);
    root.appendChild(div);
}

