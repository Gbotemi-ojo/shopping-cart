import React, { useState,useEffect } from 'react'
import iconCart from './images/icon-cart.svg'
import iconMinus from './images/icon-minus.svg'
import iconPlus from './images/icon-plus.svg'
function SuperCars(props) {
    const [currentImg, setCurrentImg] = useState(props.image1);
    const [unit, setunit] = useState(0);
    const unitData = {
        image1: props.image1,
        productName: props.carName,
        price: props.price,
        unit: unit,
        totalPrice: props.price * unit
    }
    const addToCart = ()=>{
        props.addToCart(unitData);
        setunit(0)
    }    
    const setImage1 = () => {
        setCurrentImg(props.image1);
    }
    const setImage2 = () => {
        setCurrentImg(props.image2);
    };
    const setImage3 = () => {
        setCurrentImg(props.image3);
    };
    const setImage4 = () => {
        setCurrentImg(props.image4);
    };
    const incrementUnit = () => {
        setunit(unit + 1);
    }
    const decrementUnit = () => {
        if (unit === 0) {
            return;
        }
        setunit(unit - 1);
    }
    return (
        <div className='productComponent'>
            <div className='image-carousel'>
                <div className='currentImg'>
                    <img src={currentImg} />
                </div>
                <div className='image-slider-container'>
                    <div onClick={setImage1}>
                        <img src={props.image1} />
                    </div>
                    <div onClick={setImage2}>
                        <img src={props.image2} />
                    </div>
                    <div onClick={setImage3}>
                        <img src={props.image3} />
                    </div>
                    <div onClick={setImage4}>
                        <img src={props.image4} />
                    </div>
                </div>
            </div>
            <div className='product-info-container'>
                <div className='product-name-container'>
                    <div>{props.company}</div>
                    <div>{props.carName}</div>
                </div>
                <div className='product-description'>{props.description}</div>
                <div className='product-price'>
                    <div>$</div>
                    <div>{props.price}</div>
                </div>
                <div className='cart-functionality'>
                    <div className='arithmetics'>
                        <div onClick={decrementUnit}><img src={iconMinus} /></div>
                        <div>{unit}</div>
                        <div onClick={incrementUnit}><img src = {iconPlus} /></div>
                    </div>
                    <div onClick={addToCart}>
                        <img src={iconCart} />
                        <div>Add to cart</div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default SuperCars