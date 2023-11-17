import React from 'react';
import Postjs from '../js/postjs';



const Eye2 = () => {
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
      <h4 className="home-title">SUGAR POP <br/>Matte Eyeliner</h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Matteeyelinerblack.jpg?v=1681734560" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0599/7894/0607/products/Matteeyelinerblack.jpg?v=1681734560" alt />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0599/7894/0607/products/477498675-infographics_matte-eyelinerartboard-1_opt01.jpg?v=1681735352" alt />
            </div>
            <div>
              <img src="https://cdn.shopify.com/s/files/1/0599/7894/0607/products/477498682-infographics_matte-eyelinerartboard-2.jpg?v=1681735352" alt />
            </div>
            <div className="active">
              <img src="https://cdn.shopify.com/s/files/1/0599/7894/0607/products/477498688-infographics_matte-eyelinerartboard-3.jpg?v=1681735352" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">SUGAR POP <br/>Matte Eyeliner
          </span>
          <span className="product-price">₹187</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>791 ratings</span>
          </div>
          <p className="product-description">
          Graphic cat eye, a feminine flick, or a classic wing, take all your eyeliner game to new heights with our SUGAR POP Matte Eyeliner. Pigmented to the highest degree, this clever waterproof formula has super-staying power. And that’s not all, this holy grail of a makeup stash delivers a quick to dry, true matte finish in richly saturated shades. Featuring a flexible tip, the eyeliner brush enables you to maintain ultimate control over your movement.

          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Eyeliner-Intense-Smudge-Proof-Water-Resistant-Application/dp/B0BFF8Y243?th=1&linkCode=ll1&tag=myglam09-21&linkId=f1076764fb67dab84db7131119605e05&language=en_IN&ref_=as_li_ss_tl">
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

export default Eye2;
