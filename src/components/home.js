import React from "react";
import "../styles/home.css";
import bg from "../images/bg.png";
import img1 from "../images/img1.png";
import git from "../images/github-logo.png"
import mens from "../images/mens.png"
import womens from "../images/womens.png"
import kids from "../images/kids.png"
import jw from "../images/jw.png"
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

function Home() {
    return (
        <main className="home-container">
            <section>
                <img src={bg} alt="background-logo" className="bg_img" />
                <h2>New Season Arrivals</h2>
                <p className="bg_subtitle">Online shopping is convenient and offers a variety of products you <br></br>may not be able to find at your local stores.</p>

            </section>

            <div className="testimonial">
                <h1>Our Products</h1>
                <hr></hr>
                <div className="testimonial-card">
                    <img src={mens} className="ts-card-img-top" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="ts-card-title">Men's Cloths</h5>
                    </div>
                </div>

                <div className="testimonial-card">
                    <img src={womens} className="ts-card-img-top" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="ts-card-title">Women's Cloths</h5>
                    </div>
                </div>

                <div className="testimonial-card">
                    <img src={kids} className="ts-card-img-top" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="ts-card-title">Kid's Cloths</h5>
                    </div>
                </div>

                <div className="testimonial-card">
                    <img src={jw} className="ts-card-img-top" alt="Card image cap" />
                    <div className="card-body">
                        <h5 className="ts-card-title">Jewellary</h5>
                    </div>
                </div>
            </div>

            <div className="products-container" id="products">
                <h1>Latest Products</h1>
                <hr></hr>

                {/* First Row */}
                <div className="img-cards">
                    <div className="card">
                        <img src={img1} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Womens Gown Dress</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={m5} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Green Stretch Corduroy Jacket</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={k1} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Wedding Dress for Girls </p>
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
                        <img src={j1} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Priya Diamond Necklace</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={j2} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Butterfly Pearl Neckl</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={img2} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Women's Clothing Suits</p>
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
                        <img src={k2} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Kids Gown Wear</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={k3} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Kids Suits</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={m2} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Front Open Blue Jacket</p>
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
                        <img src={img3} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Womens official outfit</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={m3} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Mens Clothing</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={m4} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Kids dress</p>
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
                        <img src={img4} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Womens official Suits</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={m1} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Street style clothing</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>

                    <div className="card">
                        <img src={j3} alt="Card image cap" className="card-img-top" />
                        <div className="card-body">
                            <p className="card-title">Bloom Pearl Necklace</p>
                            <p className="card-text">$ 99.99</p>
                        </div>

                        <div className="card-body">
                            <a href="#" className="card-link">Buy Now</a>
                            <a href="#" className="card-link">Add to Cart</a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer">
                <div>Made with ❤️ by <a>Sarita</a></div>
                <a href="https://github.com/Sarita204/E-commerce-site-React">
                    <img src={git} className="social-logo" />
                </a>
            </div>
        </main>
    );
}

export default Home;