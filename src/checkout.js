import React from 'react'
import deleteBtn from './images/icon-delete.svg'
function Checkout(props) {
  return (
    <div className='checkout'>
      <div>Cart</div>
      <hr />
      <div>
        {props.boughtProducts.map((item, index) => {
          return <div key={index} className='purchaseDetailsContainer'>
            <div className='purchaseDetails'> 
              <div><img src={item.image1} className='productImg' /></div>
              <div className='product'>
                <div>{item.productName}</div>
                <div>${item.price} * {item.unit} {item.totalPrice}</div>
              </div>
              <img src={deleteBtn} onClick={props.removeItem} id={item.productName} className='deleteBtn' />
            </div>
          </div>
        })}
      </div>
      <div className='checkoutBtn'>Checkout</div>
    </div>
  )
}
export default Checkout;