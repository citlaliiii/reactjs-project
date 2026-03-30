import { Children } from 'react';
import './App.css';
import { useState } from 'react';
import Tab from './component/TabButton/TabButton.jsx';
import Timg from './assets/react.svg';
import { data } from './data.js';
export function Header() {
  const [chao, setChao] = useState('xin chao');
  const [a, setA] = useState(new Date().getHours());
  console.log(a);
  return (
    <>
      <button
        onClick={() => {
          if (a > 12) {
            setChao('Chao buoi chieu');
            setA(a - 1);
          } else {
            setChao('chao buoi sang');
            setA(a - 1);
            if (a == 0) setA(new Date().getHours());
          }
          console.log(a);
        }}
      >
        Nhấn vào đây
      </button>
      <h1>{chao}</h1>
      <h3>Bây giờ là {a}</h3>
    </>
  );
}
function Component({ image, alt, title, des }) {
  return (
    <li>
      <img src={image} alt={alt} />
      <h2>{title}</h2>
      <p>{des}</p>
    </li>
  );
}

function a() {
  handleClick('btn0');
}
function App() {
  console.log('App dduowcj goij laij');
  const [content, setContent] = useState(['Select a button!']);
  return (
    <>
      <ul>
        <Component {...data[0]} />
        <Component {...data[1]} />
        <Component {...data[2]} />
      </ul>
      <Tab
        handleClick={() => {
          setContent((a) => [...a, ' me loc']);
        }}
      >
        btn0
      </Tab>
      {/* <Tab handleClick={}>btn1</Tab>
      <Tab handleClick={}>btn2</Tab> */}
      <p>{content}</p>
    </>
  );
}

export default App;
