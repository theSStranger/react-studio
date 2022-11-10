import "./App.css";
import { useState } from "react";
import bakeryData from "./assets/bakery-data.json";
import BakeryItem from "./components/BakeryItem";
import CartItem from "./components/CartItem";

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
bakeryData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [cart, setCart] = useState(Array(bakeryData.length).fill(0));

  const updateCart = (index) => {
    const newArr = [...cart]
    newArr[index]++
    setCart(newArr)
    console.log("ibnsdied krjdbgsj",cart)
  }

  console.log("button clicked", cart)
  return (
    <div className="App">
      <h1>My Bakery</h1> {/* TODO: personalize your bakery (if you want) */}
      <div style = {{display: "flex", flexWrap: "wrap"}}>
        {bakeryData.map((item, index) => ( // TODO: map bakeryData to BakeryItem components
        // <p>Bakery Item {index}</p> // replace with BakeryItem component
        <BakeryItem item = {item} index ={index} updateCart={updateCart}/>))}
      </div>

      <div>
      <h2>Cart</h2>
        {/* {cart.map((item,index) => (item))} */}
        {cart.map((count, index)=> count? <CartItem cartItem = {bakeryData[index]} count ={count} /> :<></>)}
        Total: $
        {(cart.reduce((a,b,index) => {
          return a + b*bakeryData[index].price}, 0)).toFixed(2)}
        {/* TODO: render a list of items in the cart */}
      </div>
    </div>
  );
}

export default App;
