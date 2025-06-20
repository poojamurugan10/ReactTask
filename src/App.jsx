import React, { useEffect, useState } from 'react';
import useApiCall from '../Components/Customhooks/useApiCall';
import CompA from '../Components/Customhooks/CompA';

const App = () => {
  const [products,setProducts]= useState([])
  const [cart,setCart]=useState([])
  const [isModalOpen, setIsModalOpen]= useState(false)

  useEffect (()=>{
     fetch("https://fakestoreapi.com/products")
  },[])

  return (
    <div>
      <CompA/>
    </div>
  );
};

export default App;