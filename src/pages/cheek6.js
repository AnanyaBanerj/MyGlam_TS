import React from 'react';
import Postjs from '../js/postjs';



const Cheek5 = () => {
  return (
    <>

<Postjs />

<div>
  {/* Header */}
  <header className>
    <div className="nav container">
      <a href="#" className="logo">My<span>Glam</span></a>
      <a href="html/login.html" className="login">Login</a>
    </div>
  </header>
  <section className="home" id="home">
    <div className="home-text container">
      <h4 className="home-title">Face Fwd  Highlighter Stick</h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-highlighter-stick-01-champagne-champion-champagne-gold-13825401290835.jpg?v=1619116541" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-highlighter-stick-01-champagne-champion-champagne-gold-13825401290835.jpg?v=1619116541" alt />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-highlighter-stick-01-champagne-champion-champagne-gold-14376637235283.jpg?v=1619116543" alt />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-highlighter-stick-01-champagne-champion-champagne-gold-14376860254291.jpg?v=1619116546" alt />
            </div>
            <div className="active">
              <img src="https://cdn.shopify.com/s/files/1/0906/2558/products/sugar-cosmetics-face-fwd-highlighter-stick-01-champagne-champion-champagne-gold-13825401323603.jpg?v=1619116555" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">SUGAR Face Fwd <br/>Highlighter Stick</span>
          <span className="product-price">₹695</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>126 ratings</span>
          </div>
          <p className="product-description">
              - Illuminating highlighters in buttery soft and creamy texture.
              -Super pigmented and buildable formula
              -Can be used under or over foundation
              -A perfect tool for when you need a quick touch-up on the go
              -Ideal for strobing and all-over glow.
              -Comes in 3 gorgeous shades to pick from



          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/SUGAR-Cosmetics-Face-Highlighter-Stick/dp/B083Q5PSK3?th=1&linkCode=ll1&tag=myglam09-21&linkId=1dee26164aac9d6f27eb81f40e6a81fa&language=en_IN&ref_=as_li_ss_tl">
              <button type="button" className="add-cart-btn">
                <i className="fas fa-wallet" />Link to Buy
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <footer id="colophon" className="site-footer" role="contentinfo">
    <div className="social-wrapper">
      <ul>
        <li>
          <a href="#" target="_blank">
            <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter Logo" className="twitter-icon" /></a>
        </li>
        <li>
          <a href="https://www.instagram.com/ananya._banerjee/" target="_blank">
            <img src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png" alt="Instagram Logo" className="instagram-icon" /></a>
        </li>
        <li>
          <a href="https://www.linkedin.com/feed/" target="_blank">
            <img src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg" alt="Linkedin Logo" className="linkedin-icon" /></a>
        </li>
        <li>
          <a href="#" target="_blank">
            <img src="https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png" alt="Facebook Logo" className="facebook-icon" /></a>
        </li>
        <li>
          <a href="https://www.youtube.com/channel/UCOwyzSDlwa7azr4CxsFiNew" target="_blank">
            <img src="https://lh3.googleusercontent.com/j_RwVcM9d47aBDW5DS1VkdxUYCkDUCB6wZglv4x-9SmsxO0VaFs7Csh-FmKRCWz9r_Ef=w170" alt="Youtube Logo" className="youtube-icon" /></a>
        </li>
      </ul>
    </div>
    <nav className="footer-nav" role="navigation">
      <p>Copyright © 2023 - All rights reserved.</p>
    </nav>
  </footer>
  {/* js */}
</div>

    </>
  );
};

export default Cheek5;
