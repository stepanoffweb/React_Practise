import React from 'react';
import {Backlayer} from './Backlayer';
import kote from '../assets/kote.png';

export const Card  = ({disabled, description, product, value, portions, mouses, itemDescription, isSelected, handleClick, id}) => {

    return <div className={`product-item ${disabled}`} onClick={handleClick} data-id={id} >
           <Backlayer disabled={disabled} />
         <div className="product__item-text">
            <span className={
                `product__item-subtext ${disabled}`
            }>Сказочное заморское яство</span>
            <div className="product__item-name">Нямушка</div>
            <div className="product__item-subname">с {product}</div>
            <div className = {
                `product__item-volume ${disabled}`
            } >
              <span className="number">{portions}</span> порций <br/>{mouses} в подарок
            </div>
            <img src={kote} alt="Питание для кошек" className={
                `product__item-img ${disabled}`
            } />
           </div>
           <div className="product__item-circle">
             <span className="product__value">{value}</span>
             <span className="product__measure">кг</span>
             </div>
           <span className="product__item-description">
           {isSelected
                ? itemDescription
                : !disabled
                    ? <>{description} <button className="product-sell" ><span className="product-sell--dotted">купи</span>.</button></>
                    : `Печалька, с ${product} закончился.`
            }
           </span>
         </div>
}
