// импорт ядра реакта
import React from 'react';
// импорт реакт-дом для вмонтиромания компонента в приложение
import ReactDOM from "react-dom/client";

import App from './App';

//  <App /> - компонент, который необходимо отрисовать
//  document.getElementById('root')  - блок, которым монтируем компонент
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  //<div> 
  //  Приложение работает!
  //  <button>
   //   Кнопка
   // </button>
  //</div>,
  //React.createElement('button', {
    // слушатель события, отражение в консоли клика по кнопке
   // onClick: () => console.log('CLICK')
  //}, 'Нажми на меня'),
  <App/>,
  //document.getElementById('root')

);

 

