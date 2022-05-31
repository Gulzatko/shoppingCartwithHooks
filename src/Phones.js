import "./App.css"
const Phones=({products})=>{
    console.log(products,"phones")
    return(
        <div className="phones">
            {
                products.map(product=>{
                    return(
                        <div className="phone" key={product.id}>
                                 <div>
                                 <img src={product.image} alt={product.name}/>
                                  </div>

                                  <div>
                                  <span>{product.name}</span>
                                  <br/>
                                  <span>{product.price}$</span>
                                  </div>

                                 <div>
                                     <div>+</div>
                                     <div>{product.count}</div>
                                     <div>-</div>
                             
                                 </div>
                        </div>
                    )
                })
            }
        </div>
    )
}
export default Phones;