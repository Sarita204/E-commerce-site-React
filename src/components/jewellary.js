import React from "react";
import "../styles/home.css";
import git from "../images/github-logo.png"
import back from "../images/back.png";
import j4 from "../images/j4.jpg"
import j5 from "../images/j5.jpg"
import j6 from "../images/j6.jpg"
import j7 from "../images/j7.jpg"
import j8 from "../images/j8.jpg"
import j9 from "../images/j9.jpg"
import j10 from "../images/j10.jpg"
import j11 from "../images/j11.jpg"
import j12 from "../images/j12.jpg"
import j13 from "../images/j13.jpg"
import j14 from "../images/j14.jpg"
import j15 from "../images/j15.jpg"
import j16 from "../images/j16.jpg"
import j17 from "../images/j17.jpg"
import j18 from "../images/j18.jpg"
import j19 from "../images/j19.jpg"
import j20 from "../images/j20.jpg"


function Jewellary() {
    return (
        <div className="products-container" id="products">
            <h1>Jewellary</h1>
            <a href="/products" style={{ display: "flex" }} >
                <img src={back} className="go-back" />
            </a>
            <hr></hr>

            {/* First Row */}
            <div className="img-cards">
                <div className="card">
                    <img src={j4} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j5} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j6} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>
            </div>

            {/* Second Row */}
            <div className="img-cards">
                <div className="card">
                    <img src={j7} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j8} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j9} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>
            </div>

            {/* Third Row */}
            <div className="img-cards">
                <div className="card">
                    <img src={j10} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j11} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j12} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>
            </div>

            {/* Fourth Row */}
            <div className="img-cards">
                <div className="card">
                    <img src={j13} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j14} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j15} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>
            </div>

            {/* Fifth Row */}
            <div className="img-cards">
                <div className="card">
                    <img src={j16} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j17} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>

                <div className="card">
                    <img src={j18} alt="Card image cap" className="card-img-top" />
                    <div className="card-body">
                        <p className="card-title">Fasshion Jewellary</p>
                        <p className="card-text">$ 99.99</p>
                    </div>

                    <div className="card-body">
                        <a href="#" className="card-link">Buy Now</a>
                        <a href="#" className="card-link">Add to Cart</a>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>Made with ❤️ by <a>Sarita</a></div>
                <a href="https://github.com/Sarita204/E-commerce-site-React">
                    <img src={git} className="social-logo" />
                </a>
            </div>
        </div>
    )

}
export default Jewellary;