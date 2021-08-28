import React from 'react'
import { useLocation } from 'react-router-dom'
import { useStateValue } from './StateProvider'



function ProductDescriptionPage() {

    const [{ basket }, dispatch] = useStateValue();

    function addToCart() {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id:id,
                imgsrc: imgsrc,
                title: title,
                price: price,
                details: details,
                descriptiveDetail:descriptiveDetail,
            }
        })
    }

    const location = useLocation()
    const {imgsrc,title,price,details,descriptiveDetail,id,stars} = location.state

    
    return (
        <div className="prodDescriptionPageWrapper">
            <img className="productImageDescriptive" src={imgsrc} />
            <div className="prodDetailsRight">
            <h2>{title}</h2>

            <h3><i className="fa fa-inr"></i> {price}</h3>
            <p className="descriptiveDetailInnerHTML">{descriptiveDetail}</p>
            <button onClick={addToCart}>Add to cart</button><br/>
            </div>
            

            
        </div>
    )
}

export default ProductDescriptionPage
