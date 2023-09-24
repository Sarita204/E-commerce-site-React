import React from "react";
import "../styles/home.css";
import bg from "../images/bg.png";
import img1 from "../images/img1.png";
import git from "../images/github-logo.png"
import mens from "../images/mens.png"
import womens from "../images/womens.png"
import kids from "../images/kids.png"
import jw from "../images/jw.png"


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
                <div class="testimonial-card">
                    <img src={mens} className="ts-card-img-top" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="ts-card-title">Men's Cloths</h5>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

                <div class="testimonial-card">
                    <img src={womens} className="ts-card-img-top" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="ts-card-title">Men's Cloths</h5>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

                <div class="testimonial-card">
                    <img src={kids} className="ts-card-img-top" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="ts-card-title">Men's Cloths</h5>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>

                <div class="testimonial-card">
                    <img src={jw} className="ts-card-img-top" alt="Card image cap" />
                    <div class="card-body">
                        <h5 class="ts-card-title">Men's Cloths</h5>
                        {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                    </div>
                </div>
            </div>

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
            <div style={{ border: "2px solid" }}>
                <div>Made with ❤️ by <a>Sarita</a></div>
                <a href="https://github.com/Sarita204">
                    <img src={git} className="social-logo" />
                </a>

            </div>
        </main>
    );
}

export default Home;