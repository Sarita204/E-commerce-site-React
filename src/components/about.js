import React from "react";
import "../styles/about.css";
import git from "../images/github-logo.png";
import mens from "../images/mens.png";
import womens from "../images/womens.png";
import kids from "../images/kids.png";
import jw from "../images/jw.png";

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <p className="about-para"> Online shopping is a form of electronic commerce which allows consumers to directly buy goods or services from a seller over the Internet using a web browser or a mobile app. Consumers find a product of interest by visiting the website of the retailer directly or by searching among alternative vendors using a shopping search engine, which displays the same product's availability and pricing at different e-retailers. As of 2020, customers can shop online using a range of different computers and devices, including desktop computers, laptops, tablet computers and smartphones.
                <br></br> <br></br>
                An online shop evokes the physical analogy of buying products or services at a regular "brick-and-mortar" retailer or shopping center; the process is called business-to-consumer (B2C) online shopping. When an online store is set up to enable businesses to buy from another businesses, the process is called business-to-business (B2B) online shopping. A typical online store enables the customer to browse the firm's range of products and services, view photos or images of the products, along with information about the product specifications, features and prices.
            </p>
            <div>
                <div className="testimonial">
                    <h1 style={{ textDecoration: "underline" }}>Our Products</h1>
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
                            <h5 class="ts-card-title">Women's Cloths</h5>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <img src={kids} className="ts-card-img-top" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="ts-card-title">Kid's Cloths</h5>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>

                    <div class="testimonial-card">
                        <img src={jw} className="ts-card-img-top" alt="Card image cap" />
                        <div class="card-body">
                            <h5 class="ts-card-title">Jewellary</h5>
                            {/* <a href="#" class="btn btn-primary">Go somewhere</a> */}
                        </div>
                    </div>
                </div>

            </div>

            <div className="footer">
                <div>Made with ❤️ by <a>Sarita</a></div>
                <a href="https://github.com/Sarita204">
                    <img src={git} className="social-logo" />
                </a>
            </div>
        </div>
    );
}

export default About;