import React, { useState } from 'react'

function Sidebar({categories, setCategories, sortFunc}) {
    



    return (
        <div>
            <div className="sidebar">

                <div className="categories">
                    <h2>Categories</h2>

                    <div>
                        <input checked={categories.menClothing} onChange={(e) => setCategories({ ...categories, menClothing: e.target.checked })} type="checkbox" />
                        <label>Men's clothing</label>
                    </div>

                    <div>
                        <input checked={categories.womenClothing} onChange={(e) => setCategories({ ...categories, womenClothing: e.target.checked })} type="checkbox" />
                        <label>Women's Clothing</label>
                    </div>

                    <div>
                        <input checked={categories.jewelery} onChange={(e) => setCategories({ ...categories, jewelery: e.target.checked })} type="checkbox" />
                        <label>Jewelery</label>
                    </div>

                    <div>
                        <input checked={categories.electronics} onChange={(e) => setCategories({ ...categories, electronics: e.target.checked })} type="checkbox" />
                        <label>electronics</label>
                    </div>

                </div>

                <div className="sort">
                    <h2>Sort</h2>
                    <select onChange={(e) => sortFunc(e)}>
                        <option>Price: Low to high</option>
                        <option>Price: High to low</option>
                    </select>
                </div>

            </div>
        </div>
    )
}

export default Sidebar
