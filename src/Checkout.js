import React from 'react'
import CheckoutProducts from './CheckoutProducts';
import { useStateValue } from './StateProvider';
import Subtotal from "./Subtotal"





function Checkout() {
    const [{ basket, user }, dispatch] = useStateValue();

    if (basket.length == 0) {
        return (<>
            <h1 className="emptyCartH1" >Your cart is empty. Go add products!</h1>
        </>)
    }


    return (
        <>

            <h2 className="shoppingCartTitle">Your shopping cart</h2>
            <h3 className="shoppingCartTitle">Hello, {user? user.email : "User"}</h3>

            <div className="checkout">

                <div className="che_right">
                    <Subtotal />
                </div>

                <div className="che_left">

                    {basket.map(item => (
                        <CheckoutProducts
                            title={item.title}
                            price={item.price}
                            details={item.details}
                            imgsrc={item.imgsrc}
                            id={item.id}
                            key={item.id}
                        />
                    ))}
                </div>


            </div>
        </>
    )
}

export default Checkout
