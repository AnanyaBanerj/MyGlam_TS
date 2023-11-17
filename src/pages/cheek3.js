import React from 'react';
import Postjs from '../js/postjs';



const Cheek3 = () => {
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
      <h4 className="home-title">Swiss Beauty <br />ULTRA BLUSH PALETTE</h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://swissbeauty.in/cdn/shop/products/SB-881-01b_900x.jpg?v=1698321917" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://swissbeauty.in/cdn/shop/products/SB-881-01b_900x.jpg?v=1698321917" alt />
            </div>
            <div>
              <img src="https://swissbeauty.in/cdn/shop/products/4_c0266275-7a4e-4e0d-b1a2-5c314a13873c_1800x1800.png?v=1698321917" alt />
            </div>
            <div>
              <img src="https://swissbeauty.in/cdn/shop/products/5_a574ad92-b90a-4a0a-91ae-ccc2a44b10f3_1800x1800.png?v=1698321917" alt />
            </div>
            <div className="active">
              <img src="https://swissbeauty.in/cdn/shop/products/8_3762d9a1-8e4d-43f4-bdf2-bccbbab15274_1800x1800.png?v=1698321917" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">Swiss Beauty ULTRA BLUSH PALETTE
          </span>
          <span className="product-price">₹419</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>1350 ratings</span>
          </div>
          <p className="product-description">
          Swiss Beauty Ultra Blush Palette has eight highly pigmented shades that offer a natural-looking flush of colour on your cheeks. The formula of the blushes is smooth and blendable, making them easy to apply and build up to your desired level of intensity. The lightweight texture of the blushes ensures that they feel comfortable on your skin and don't weigh it down. They are also designed to provide a seamless, natural finish on the skin, giving you a radiant flush of colour. And with its affordable price point, you can enjoy high-quality blush shades without breaking the bank. The compact size of the palette makes it easy to carry around and touch up your makeup on the go, making it perfect for travel or busy lifestyles. Whether you're a beginner or a pro, this palette is a great addition to your makeup collection and will help you achieve a flawless and radiant makeup look.


          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Palette-Blendable-Pigmented-Blusher-Natural/dp/B08474JWXR?th=1&linkCode=ll1&tag=myglam09-21&linkId=b3ae3b4cb58dd27865523f2448f7c12f&language=en_IN&ref_=as_li_ss_tl">
              <button type="button" className="add-cart-btn">
                <i className="fas fa-wallet" />Link to Buy
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/* goback */}
  {/* <button onclick="goBack()" className="button-go">Go Back</button> */}
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

export default Cheek3;
