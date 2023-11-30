import { useState } from "react";
import Product from "./product.json";

function ProductFilter() {
    const [items, setItems] = useState(Product)
    console.log(Product)
    return(
        <div className="container mt-5">
            <h1>My Products</h1>
            <div className="row">
            {items.map((val) =>(
                <div className="col-md-3">
                    <div class="card" >
                        <img src={val.image} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                        <h5>{val.title}<span class="badge bg-secondary">{val.category}</span></h5>
                        <h5>Price: ${val.price}</h5>
                            
                        </div>
                        </div>
                </div>                           
            ))}
            </div>
        </div>
    ) ;
}

export default ProductFilter;