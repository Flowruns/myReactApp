// импорт ядра реакта
import React from 'react';
// импорт реакт-дом для вмонтиромания компонента в приложение
import ReactDOM from 'react-dom';
import App from './App';

//  <App /> - компонент, который необходимо отрисовать
//  document.getElementById('root')  - блок, которым монтируем компонент
ReactDOM.render(
  //<div> 
  //  Приложение работает!
  //  <button>
   //   Кнопка
   // </button>
  //</div>,
  React.createElement('button', {
    // слушатель события, отражение в консоли клика по кнопке
    onClick: () => console.log('CLICK')
  }, 'Нажми на меня'),
  document.getElementById('root')

);

 

