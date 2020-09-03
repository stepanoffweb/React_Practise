import React, { useState } from 'react';
import './App.css';
import {Card} from './components/Productitem';


const description = 'Чего сидишь? Порадуй котэ,'
const product = [
  {name: 'фуа-гра',
  key: 0,
  disabled: '',
  value: 5,
  portions: 10,
  mouses: 'мышь',
  isSelected: false,
  itemDescription: 'Печень утки разварная с артишоками.'
  },
  {name: 'рыбой',
  key: 1,
  disabled: '',
  value: 2,
  portions: 40,
  mouses: '2 мыши',
  isSelected: false,
  itemDescription: 'Головы щучьи с чесноком да свежайшая сёмгушка.'
  },
  {name: 'курой',
  key: 2,
  disabled: 'disabled',
  value: 0.5,
  portions: 100,
  mouses: '5 мышей',
  isSelected: false,
  itemDescription: 'Филе из цыплят с трюфелями в бульоне.'
}
]

function App() {
  let selectFlags = product.map(item => item.isSelected)
  const [isSelected, setSelected] = useState(selectFlags)

  const handleClick = ({currentTarget}) => {
    const id = +currentTarget.dataset.id
    if (!currentTarget.classList.contains('disabled')) {
      setSelected(prevState => {
        prevState.splice(id, 1, !prevState[id])
        return prevState
      })
      currentTarget.classList.toggle('selected')
      if (!isSelected[id]) {
        currentTarget.querySelector('.product__item-circle').style = ''
        currentTarget.querySelector('.product__item-subtext').style = ''
        currentTarget.querySelector('.product__item-subtext').textContent = 'Сказочное заморское яство'
      } else {
        currentTarget.querySelector('.product__item-description').textContent = product[id].itemDescription
        currentTarget.addEventListener('mouseleave', () => {
          if (isSelected[id]) {
            currentTarget.querySelector('.product__item-circle').style = 'background-color: #e52e7a;'
            currentTarget.querySelector('.product__item-subtext').style = 'color: #e62e7a;'
            currentTarget.querySelector('.product__item-subtext').textContent = 'Котэ не одобряет?'
          }
        })

      }
    }
  }

  return (
    <div className="container">

      <section className="section">
       <h1 className="title">Ты сегодня покормил кота?</h1>
       <div className="products-wrapper">
        {product.map(item =>
          <Card key={item.key}
          product={item.name}
          description={description}
          disabled={item.disabled}
          value={item.value}
          portions={item.portions}
          mouses={item.mouses}
          itemDescription={item.itemDescription}
          isSelected={item.isSelected}
          handleClick={handleClick}
          id={item.key} /> )}
       </div>
     </section>
    </div>
  );
}

export default App;
