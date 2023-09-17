import './style.css'
import { expandingCard, expandHandler } from './src/day1/script'
import { progressBar,progressHandler } from './src/day2/script';


let path = '';
const app = document.getElementById('app');
app.innerHTML = `
    <button id="btnone">Expand Card</button>
    <button id="btntwo">Progress Bar</button>

`
const linkInjector = (path) => {
    const link1 = document.createElement('link');
    link1.rel = 'stylesheet';
    link1.href = path;
    document.head.appendChild(link1);
}
document.getElementById('btnone').addEventListener('click', () => {
    // Project No. 1 Start
    app.innerHTML = ''
    path = './src/day1/style.css'
    linkInjector(path)
    expandingCard();
    expandHandler();
})
document.getElementById('btntwo').addEventListener('click', () => {
    // Project No. 2 Star
    app.innerHTML = ''
    path = './src/day2/style.css'
    linkInjector(path)
    progressBar();
    progressHandler()
})






