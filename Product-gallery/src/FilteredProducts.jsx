import { useState } from "react";
import Product from "./product.json";

function FilteredProducts() {
    const [items, setItems] = useState(Product)
    console.log(Product)
    return(
        <div className="container mt-5">
            <h1>My Products</h1>
            <button type="button" class="btn btn-primary me-3 ">All Products</button>
            <button type="button" class="btn btn-primary me-3">Secondary</button>
            <button type="button" class="btn btn-primary me-3">Success</button>
            <button type="button" class="btn btn-primary me-3">Danger</button>
            <button type="button" class="btn btn-primary ">Warning</button>

            <hr />
            <div className="row">
            {items.map((val) =>(
                <div className="col-md-3">
                    <div class="card" >
                        <img src={val.image} class="card-img-top img-fluid" alt="..." />
                        <div class="card-body">
                        <h5>{val.title.substring(0,25)}</h5>
                        <div class="badge bg-primary mt-1">{val.category}</div>
                        <h5>Price: ${val.price}</h5>
                            
                        </div>
                        </div>
                </div>                           
            ))}
            </div>
        </div>
    ) ;
}

export default FilteredProducts;