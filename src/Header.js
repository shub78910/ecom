import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { auth } from './firebase';
import { useStateValue } from './StateProvider'



function Header({ setSearch }) {

    const [{ basket, user }] = useStateValue();
    const [navToggle,setNavToggle] = useState("navToggle")


    function handleAuthentication() {
        if (user) {
            let verifySignOut = window.confirm("Do you want to sign out?")
            if (verifySignOut) {
                auth.signOut();
            }
        }
    }

    function toggleNav(){
        if(navToggle==" "){
            setNavToggle("navToggle")
        }else{
            setNavToggle(" ")
        }
    }

    return (
        <div className="header">
            <Link className="logoTxt" to="/">
                <h1>ANETAZO BIZZ</h1>
            </Link>

            <div className="searchInput">
                <input onChange={(e) => setSearch(e.target.value)} placeholder="Search items" />
            </div>

            <div onClick={toggleNav} className="hamburger">
                <small className="cartLength">{basket.length}</small>
                <div className="hamLine"></div>
                <div className="hamLine"></div>
                <div className="hamLine"></div>
            </div>

            <div className={`navOptions ${navToggle}`}>
                <Link onClick={toggleNav} className="cartLink" to={!user && "/login"}>
                    <div onClick={handleAuthentication}><span className="nav_option_line1">Hello, {user ? user.email : "Guest"}.</span><br />
                        <span className="nav_option_line2">{user ? "Sign Out" : "Sign In"}</span>
                    </div>
                </Link>

                <Link onClick={toggleNav} className="cartLink" to="/profile">
                    <div><i className="faIcons fa fa-user"></i><span className="nav_option_line1">Your</span><br />
                        <span className="nav_option_line2">Profile</span></div>
                </Link>

                <Link onClick={toggleNav} className="cartLink" to="/cart">
                    <div><i className="faIcons fa fa-shopping-basket"></i><span className="cartCount">{basket.length}</span></div>
                </Link>
            </div>

        </div>

    )
}

export default Header