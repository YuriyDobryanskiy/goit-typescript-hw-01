import './style.css'
// import { age } from './basic/1';
// import { person } from './basic/2';
// import { status } from './basic/3';
// import { showMessage } from './basic/4';


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div>
    <h1>Vite + TypeScript</h1>
    <ul>
      <a href="./basic"><li>Basic</li></a>
      <a href="./generics"><li>Generics</li></a>
    </ul>
  </div>
`

