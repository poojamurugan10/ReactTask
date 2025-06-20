import React, { useEffect, useState } from 'react';
import useApiCall from '../Components/Customhooks/useApiCall';
import CompA from '../Components/Customhooks/CompA';
import ProductList from '../Components/RealTime/ProductList';
import Navbar from '../Components/RealTime/Navbar';
import CartModal from '../Components/RealTime/CartModal';



const App = () => {
  const [products,setProducts]= useState([])
  const [cart,setCart]=useState([])
  const [isModalOpen, setIsModalOpen]= useState(false)

  useEffect (()=>{
     fetch("https://fakestoreapi.com/products")
     .then((res)=>res.json())
     .then((data)=>setProducts(data))
  },[])

const addToCart =(product) =>{
    const productInCart = cart.find((item)=> item.id === product.id)
    if (productInCart){
      alert("Item already added to the cart")
    }
    else{
      setCart([...cart,product])
    }
}

const removeFromCart = (productId) =>{
  setCart(cart.filter((item)=>item.id != productId))
}




  return (
    <div className='bg-gray-100 min-h-screen'>

      <Navbar cartCount={cart.length} openCart={() => setIsModalOpen(true)}/>
      <ProductList products={products} addToCart={addToCart}/>
      {isModalOpen && (
        <CartModal cart={cart} closeModal = {()=>setIsModalOpen(false)} removeFromCart={removeFromCart}/>
      )}
    </div>
  );
};

export default App;