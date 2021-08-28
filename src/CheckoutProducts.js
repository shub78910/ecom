import React from 'react'
import { useStateValue } from './StateProvider';


function CheckoutProducts({ title, price, details, imgsrc, id }) {
    const [{ basket }, dispatch] = useStateValue();

    function removeFromCart() {
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }

    return (
        <div className="CheckoutProducts">
            <img className="productImage" src={imgsrc} />

            <div>
                <h2>{title}</h2>

                <i className="faIcons fa fa-star"></i>
                <i className="faIcons fa fa-star"></i>
                <i className="faIcons fa fa-star"></i>
                <i className="faIcons fa fa-star"></i>
                <h3>{price} Rs</h3>
                <p>{details}</p>
                <small>Eligible for FREE Shipping</small>
                <div className="buttons">
                    <button onClick={removeFromCart}>Remove from cart</button>
                </div>

            </div>
        </div>
    )
}

export default CheckoutProducts
