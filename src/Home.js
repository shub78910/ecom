import React, { useState, useContext, useEffect } from 'react'
import Product_card from "./Product_card"
import Sidebar from './Sidebar'


function Home({ productDetailsOBJ2, loading, search }) {

    const [categories, setCategories] = useState(
        { menClothing: true, jewelery: true, electronics: true, womenClothing: true }
    )

    const [sort, setSort] = useState({})


    function sortFunc(e) {
        if (e.target.value == "Price: Low to high") {
            sortListAsc()
        } else {
            sortListDesc()
        }
    }

    function sortListAsc() {
        setSort({
            keyy:
                productDetailsOBJ2.sort((a, b) => {
                    return (a.price - b.price);
                }),
            togg: false
        }
        )
    }

    function sortListDesc() {
        setSort({
            keyy:
                productDetailsOBJ2.sort((a, b) => {
                    return (b.price - a.price);
                }),
            togg: true
        }
        )
    }



    return (
        <div className="homeWrapper">
            <img
                className="home__image"
                src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Samsung/SUD_3rdJun/Family/Copy2/D24151667_SUD_IN_WLME_June_Samsung_Family_DesktopTallHero_1500x600._CB667584640_.jpg"
                alt=""
            />

            <Sidebar
                categories={categories}
                setCategories={setCategories}
                sortFunc={sortFunc}
            />
            
            <div className="productsGalleryWrapper">

                {loading && <div><i className="fa fa-refresh fa-spin fa-5x loader"></i></div>}

                <div className="product_cards">

                    {productDetailsOBJ2?.filter((items) => {
                        if (search == "") {
                            return items
                        }
                        else if (items.title.toLowerCase().indexOf(search.toLowerCase()) !== -1) {
                            return items
                        }

                    })?.map((item) => {
                        if (

                            (categories.menClothing && item.category == "men's clothing") ||
                            (categories.womenClothing && item.category == "women's clothing") ||
                            (categories.jewelery && item.category == "jewelery") ||
                            (categories.electronics && item.category == "electronics")

                        ) {
                            return (
                                <Product_card
                                    title={item.title}
                                    price={item.price}
                                    imgsrc={item.image}
                                    id={item.id}
                                    key={item.id}
                                    tag={item.category}
                                    descriptiveDetail={item.description}
                                />)
                        }
                    })}

                </div>
            </div>

        </div>
    )
}

export default Home
