import React from "react";
import "../styles/home.css";
import img1 from "../images/img1.png";
import m1 from "../images/m1.png";
import k1 from "../images/k1.jpg"
import j1 from "../images/j1.jpg"
import j2 from "../images/j2.jpg"
import img2 from "../images/img2.jpg"
import k2 from "../images/k2.jpg"
import k3 from "../images/k3.jpeg"
import m2 from "../images/m2.png"
import m3 from "../images/m3.jpg"
import img3 from "../images/img3.jpg"
import m4 from "../images/m4.jpg"
import img4 from "../images/img4.jpg"
import m5 from "../images/m5.jpg"
import j3 from "../images/j3.jpg"
function Products() {

    return (
        <div className="products-container" id="products">
            <h1>Latest products</h1>
            <hr></hr>

            <div className="filtering_buttons">
                <a href="/products" className="f-title" aria-selected style={{background:"blue", color:"white"}}>All</a>
                <a href="/mens" className="f-title">Men's Cloths</a>
                <a href="/womens" className="f-title">Women's Cloths </a>
                <a href="/kids" className="f-title">Kid's Cloths</a>
                <a href="/jewellary" className="f-title">Jewellary</a>
            </div>

            {/* First Row */}
            <div className="img-cards">
                <div className="card">
                    <img src={img1} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Womens Gown Dress</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={m5} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Green Stretch Corduroy Jacket</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={k1} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Wedding Dress for Girls </p>
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
                    <img src={j1} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Priya Diamond Necklace</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j2} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Butterfly Pearl Neckl</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={img2} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Women's Clothing Suits</p>
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
                    <img src={k2} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Kids Gown Wear</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={k3} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Kids Suits</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={m2} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Front Open Blue Jacket</p>
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
                    <img src={img3} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Womens official outfit</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={m3} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Mens Clothing</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={m4} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Kids dress</p>
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
                    <img src={img4} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Womens official Suits</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={m1} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Street style clothing</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" class="card-link">Buy Now</a>
                        <a href="#" class="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j3} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Bloom Pearl Necklace</p>
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