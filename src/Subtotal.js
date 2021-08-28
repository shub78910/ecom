import React from 'react'
import CurrencyFormat from "react-currency-format";
import { useStateValue } from './StateProvider';


function Subtotal() {
let FINALPRICE=0;
    const [{basket}] = useStateValue();

    basket.map(price=>{
        FINALPRICE=FINALPRICE+parseInt(price.price)
    })

    return (
        <div className="subtotal">
            <CurrencyFormat
                renderText={(value)=>(
                    <>
                    <p>
                        Subtotal ({basket.length} items): 
                        <strong>{FINALPRICE} Rs</strong>
                    </p>
                    <small className="subtotal_gift">
                        <input type="checkbox" />This order contains a gift
                    </small>
                    </>
                )}

                decimalScale={2}
                value={0}
                displayType={"text"}
                thousandSeperator={true}
                prefix={"Rs"}
            /><br/>

            <button>Proceed to checkout</button>
        </div>
    )
}

export default Subtotal
