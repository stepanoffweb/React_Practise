import React from 'react';
import './App.css';
import kote from './assets/kote.png'

function App() {
  return (
    <div className="container">

      <section className="section">
       <h1 className="title">Ты сегодня покормил кота?</h1>
       <div className="products-wrapper">

         <div className="product-item">
           <svg className="bottom" width="320"  height="480" >
             <path d="M50 0 L300 0  Q320 0 320 20 L320 460  Q320 480 300 480 L20 480 Q0 480 0 460 L0 50 Z " fill="#2ea8e6"></path>
               <svg className="top" width="320"  height="480" viewport="0 0 320 480">
             <path d="M54 4 L300 4  Q316 4 316 24 L316 456  Q316 476 296 476 L24 476 Q4 476 4 456 L4 54 Z " fill="#fff"></path>
           </svg>
         </svg>
         <div className="product__item-text">
         <span className="product__item-subtext">Сказочное заморское яство</span>
         <div className="product__item-name">Нямушка</div>
         <div className="product__item-subname">с фуа-гра</div>
         <div className="product__item-volume">
         <span className="number">10</span> порций <br/> мышь в подарок</div>
         <img src={kote} alt="Питание для кошек" className="product__item-img" />
           </div>
           <div className="product__item-circle">
             <span className="product__value">0,5</span>
             <span className="product__measure">кг</span>
             </div>
           <span className="product__item-description">Чего сидишь? Порадуй котэ,  <button className="product-sell" ><span className="product-sell--dotted">купи</span>.</button></span>
         </div>

         <div className="product-item">
                 <svg className="bottom" width="320"  height="480" >
               <path d="M50 0 L300 0  Q320 0 320 20 L320 460  Q320 480 300 480 L20 480 Q0 480 0 460 L0 50 Z " fill="#2ea8e6"></path>
                 <svg className="top" width="320"  height="480" viewport="0 0 320 480">
               <path d="M54 4 L300 4  Q316 4 316 24 L316 456  Q316 476 296 476 L24 476 Q4 476 4 456 L4 54 Z " fill="#fff"></path>
             </svg>
           </svg>
           <div className="product__item-text">
             <span className="product__item-subtext">Сказочное заморское яство</span>
             <div className="product__item-name">Нямушка</div>
             <div className="product__item-subname">с рыбой</div>
             <div className="product__item-volume">
             <span className="number">40</span> порций <br/>
             <span className="number">2</span> мыши в подарок
             </div>
             <img src={kote} alt="Питание для кошек" className="product__item-img" />
             </div>

             <div className="product__item-circle">
             <span className="product__value">2</span>
             <span className="product__measure">кг</span>
             </div>

             <span className="product__item-description">Чего сидишь? Порадуй котэ,  <button className="product-sell" ><span className="product-sell--dotted">купи</span>.</button></span>
             </div>
             <div className="product-item">
             <svg className="bottom" width="320"  height="480" >
             <path d="M50 0 L300 0  Q320 0 320 20 L320 460  Q320 480 300 480 L20 480 Q0 480 0 460 L0 50 Z " fill="#2ea8e6"></path>
             <svg className="top" width="320"  height="480" viewport="0 0 320 480">
             <path d="M54 4 L300 4  Q316 4 316 24 L316 456  Q316 476 296 476 L24 476 Q4 476 4 456 L4 54 Z " fill="#fff"></path>
             </svg>
             </svg>
             <div className="product__item-text">
             <span className="product__item-subtext">Сказочное заморское яство</span>
             <div className="product__item-name">Нямушка</div>
             <div className="product__item-subname">с курой</div>
             <div className="product__item-volume">
             <span className="number">100</span> порций <br/>
             <span className="number">5</span> мышей в подарок <br/> заказчик доволен
             <img src={kote} alt="Питание для кошек" className="product__item-img" />
             </div>
             </div>

             <div className="product__item-circle">
             <span className="product__value">5</span>
             <span className="product__measure">кг</span>
             </div>
           <span className="product__item-description">Чего сидишь? Порадуй котэ, <button className="product-sell" >
               <span className="product-sell--dotted">купи</span>.</button>
           </span>
         </div>
       </div>
     </section>
    </div>
  );
}

export default App;
