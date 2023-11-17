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
      <h4 className="home-title">Swiss Beauty<br/> Brick Highlighter </h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://swissbeauty.in/cdn/shop/products/01A_900x.jpg?v=1681132917" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://swissbeauty.in/cdn/shop/products/01A_900x.jpg?v=1681132917" alt />
            </div>
            <div>
              <img src="https://swissbeauty.in/cdn/shop/products/2_7e82103a-2fde-4316-8f21-3dee1cdc089d_900x.png?v=1683020569" alt />
            </div>
            <div>
              <img src="https://swissbeauty.in/cdn/shop/products/4_4d96853e-08d1-4888-a3dc-ce89b9e3b35d_900x.png?v=1683020585" alt />
            </div>
            <div className="active">
              <img src="https://swissbeauty.in/cdn/shop/products/6_dafd5015-dbe2-44ec-afb9-433a32a756b8_900x.png?v=1683020605" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">Swiss Beauty <br/>Brick Highlighter
</span>
          <span className="product-price">₹300</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>3941 ratings</span>
          </div>
          <p className="product-description">Swiss Beauty Brick Highlighter is a versatile and stunning makeup product, available in 5 shades and is perfect for anyone who wants to achieve a glowing, luminous skin. This highlighter is designed to enhance your features and create a radiant, healthy-looking glow that lasts all day long. The finely milled powders blend seamlessly onto the skin, creating a luminous and adds a subtle radiance. The highlighter palette includes a variety of shades that can be used to highlight the cheekbones, nose, cupid's bow, and brow bone. The formula is buildable, so you can create a subtle glow or a bold, intense shine depending on your preference. It's also long-lasting, ensuring that your glow will last all day and night. The compact size of the palette makes it convenient to carry around with you, allowing you to touch up your look on-the-go. Whether you're going for a natural daytime look or a bold, glamorous evening look, the Swiss Beauty Brick Highlighter is the perfect addition to your makeup routine.


          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Swiss-Beauty-Blusher-Highlighter-Shade-02/dp/B07SZ8Q9JD?th=1&linkCode=ll1&tag=myglam09-21&linkId=f79daa0307c06b77ba05517d6ad09b04&language=en_IN&ref_=as_li_ss_tl">
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
