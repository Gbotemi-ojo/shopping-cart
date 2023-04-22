import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './home'
import Lamborghini from "./Lamborghini"
import ShareLayout from "./ShareLayout";
import Checkout from "./checkout";
import Ferarri from "./Ferarri";
import Mclaren from "./mclaren";
const RouteSwitch = () => {
    const [boughtProducts,setBoughtProducts] = useState([]);
    const [cartSize, setCartSize] = useState(0);
    const addToCart = (data)=>{
        if(data.unit > 0 ){
            setCartSize(cartSize + data.unit)
            setBoughtProducts([...boughtProducts,data]);
        }
    }
    const removeItem = (e) => {
        const arr = [...boughtProducts];
        let id = e.target.id;
        const itemPos = boughtProducts.findIndex(item => item.productName == id);
        if (itemPos > -1) {
          setCartSize(cartSize - arr[itemPos].unit)
          arr.splice(itemPos, 1);
          setBoughtProducts(arr);
        }
    }
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={ <ShareLayout cartSize = {cartSize} />}>
                   <Route path="lamborghini" element={<Lamborghini addToCart = {addToCart}/>} />
                    <Route path="ferarri" element={<Ferarri addToCart={addToCart} />}/>
                    <Route path="mclaren" element={<Mclaren addToCart={addToCart} />} />
                   {/* <Route path="*" element={<Error/>} /> */}
                   <Route index element={<Home />} />
                    <Route path="checkout" element={<Checkout boughtProducts = {boughtProducts} removeItem = {removeItem} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
export default RouteSwitch; 