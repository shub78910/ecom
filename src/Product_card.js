import React from 'react'
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider'

function Product_card({ title, price, details, imgsrc, descriptiveDetail, id, stars }) {

    const [{ basket }, dispatch] = useStateValue();

    function addToCart() {
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                id: id,
                imgsrc: imgsrc,
                title: title,
                price: price,
                details: details,
                descriptiveDetail: descriptiveDetail,
                stars: stars
            }
        })
    }

    return (
        <div id="productCardWrapper" >

            <div className={`productCard`}>
                <Link to={{
                    pathname: "/DescriptionPage",
                    state: {
                        id: id,
                        imgsrc: imgsrc,
                        title: title,
                        price: price,
                        details: details,
                        descriptiveDetail: descriptiveDetail,
                    }
                }
                }>
                    <img className="productImage" src={imgsrc} />
                </Link>

                <h4>{title}</h4>
                
                <h2><i className="fa fa-inr"></i> {price}</h2>
                <p>{details}</p>

                <div className="buttons">
                    <button onClick={addToCart}>Add to cart</button>
                    <button>Buy now</button>
                </div>
            </div>

        </div>
    )
}

export default Product_card
