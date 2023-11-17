import React from 'react';
import Postjs from '../js/postjs';



const Cheek4 = () => {
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
      <h4 className="home-title">PIXI Cream <br/>Blush Stick </h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://www.beautynation.in/wp-content/uploads/2023/03/Pixi-On-The-Glow-Blush-Fleur.jpg" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://www.beautynation.in/wp-content/uploads/2023/03/Pixi-On-The-Glow-Blush-Fleur.jpg" alt />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61t5TUyA5kL._SL1000_.jpg" alt />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61LKT4lHgJL._SL1000_.jpg" alt />
            </div>
            <div className="active">
              <img src="https://m.media-amazon.com/images/I/61Dq2HxT84L._SL1000_.jpg" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">PIXI Cream <br/>Blush Stick</span>
          <span className="product-price">₹999</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i class="fas fa-star-half-alt"></i></span>
            <span>4 ratings</span>
          </div>
          <p className="product-description">
          PIXI On the Glow Blush is formulated with ginseng, aloe vera and a unique mix of fruit extracts. This tinted balm provides a hint of natural colour while hydrating and conditioning skin.

Product Details:

- Hydrating solid cheek tint
- Use on cheeks and lips
- Vitamin packed for antioxidant benefits
- One sweep colour payoff
- Complements all skin tones
- Paraben-free
- Not tested on animals
          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/PIXI-Cream-Blush-Stick-Go/dp/B0CL4YQTYY?keywords=pixi%2Bblush%2Bstick&qid=1700225734&sr=8-4&th=1&linkCode=ll1&tag=myglam09-21&linkId=a72e022709c905468f62cc7092d8135b&language=en_IN&ref_=as_li_ss_tl">
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

export default Cheek4;
