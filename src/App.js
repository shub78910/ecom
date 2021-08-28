import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import { auth } from './firebase';
import { useStateValue } from './StateProvider'


import Header from './Header';
import Home from './Home';
import Checkout from './Checkout';
import Profile from './Profile';
import ProductDescriptionPage from "./ProductDescriptionPage"
import Login from './Login';
import Footer from "./Footer"

function App() {
  const [{ }, dispatch] = useStateValue();
  const [productDetailsOBJ2, setProductDetailsOBJ2] = useState();
  const [loading, setLoading] = useState(false);
  const [search, setSearch] = useState("");
  const [fullName, setFullName] = useState("");



  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then(resp => resp.json())
      .then(json => store(json))

    function store(json) {
      setLoading(true)

      setTimeout(() => {
        setLoading(false)
        setProductDetailsOBJ2(json)
      }, 3000)
    }
  }, [])


  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {

      if (authUser) {
        dispatch({
          user: authUser,
          type: "SET_USER"
        })
      }
      else {
        dispatch({
          user: null,
          type: "SET_USER"
        })

      }
    })
  }, [])



  return (
    <>
      <Router>
        <Header 
        search={search} 
        setSearch={setSearch} 
        productDetailsOBJ2={productDetailsOBJ2} 
        setProductDetailsOBJ2={setProductDetailsOBJ2} 
        />

        <Switch>

          <Route path="/cart">
            <Checkout />
          </Route>

          <Route path="/login">
            <Login fullName={fullName} setFullName={setFullName} />
          </Route>

          <Route path="/DescriptionPage">
            <ProductDescriptionPage />
          </Route>

          <Route path="/profile">
            <Profile fullName={fullName} setFullName={setFullName} />
          </Route>

          <Route path="/">
            <Home 
            search={search} 
            setSearch={setSearch} 
            productDetailsOBJ2={productDetailsOBJ2} 
            loading={loading} 
            />
          </Route>

        </Switch>

      </Router>
    </>
  );
}

export default App;