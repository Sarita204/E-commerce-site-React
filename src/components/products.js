import React from "react";
import img1 from "../images/img1.png";
import "../styles/home.css";


function Products(){
    return(
        <div className="products-container" id="products">
        <h1>Latest products</h1>
        <hr></hr>

        <div className="filtering_buttons">
            <button type="text" className="f-title">All</button>
            <button type="text" className="f-title">Men's Cloths</button>
            <button type="text" className="f-title">Women's Cloths</button>
            <button type="text" className="f-title">Kid's Cloths</button>
            <button type="text" className="f-title">Jewellary</button>
        </div>

        {/* First Row */}
        <div className="img-cards">
            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>

                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

              <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>
        </div>

         {/* Second Row */}
         <div className="img-cards">
            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>

                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

              <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>
        </div>

{/* Third Row */}
<div className="img-cards">
            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>

                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

              <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>
        </div>

{/* Fourth Row */}
<div className="img-cards">
            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>

                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

              <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>
        </div>

{/* Fifth Row */}
<div className="img-cards">
            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>

                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

              <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>

            <div className="card">
                <img src={img1} alt="Card image cap" className="card-img-top" />
                <div className="card-body">
                    <p className="card-title">Card title</p>
                    <p className="card-text">Note: This Cloths is US standard size, Please choose size as your usual wear Material: 100%...</p>
                <p className="card-text">$ 99.99</p>
                </div>
                
                <div className="card-body">
                    <a href="#" class="card-link">Buy Now</a>
                    <a href="#" class="card-link">Add to Cart</a>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Products;