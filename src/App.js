import{useState} from "react";
import {data} from "./data";
import Phones from "./Phones"
import "./App.css"
function App(){
  const[products,setData]=useState(data)
   console.log(products)
  return(
    
    <div className="App">
      <div className="header">
        Shopping Card
        <span>0</span>
      </div>
      <Phones products={products}/>
      <footer>
        total price 0
      </footer>
    </div>
  )
}

export default App;
