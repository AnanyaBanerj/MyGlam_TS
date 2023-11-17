import React from 'react';
import Postjs from '../js/postjs';



const LipStick5 = () => {
  return (
    <>

<Postjs />
<div>

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
      <h4 className="home-title">PLUM Candy Melts <br />Vegan Lip Balm </h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_RedVelvetLove_01_750x.jpg?v=1632452212" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_RedVelvetLove_01_750x.jpg?v=1632452212" alt />
            </div>
            <div>
              <img src="https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_RedVelvetLove_07_750x.jpg?v=1689139562" alt />
            </div>
            <div>
              <img src="https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_RedVelvetLove_04_750x.jpg?v=1689139566" alt />
            </div>
            <div className="active">
              <img src="https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_RedVelvetLove_06_750x.jpg?v=1689139570" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">PLUM Candy Melts <br />Vegan Lip Balm
          </span>
          <span className="product-price"> ₹ 206</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>3111 ratings</span>
          </div>
          <p className="product-description">
            Velvet soft lips, coming right up! Nourish your lips with this delightfully sugar sweet and baked good scented lip balm! Rich with carrot seed oil, cocoa butter, shea butter, and olive oil, this little jar of vegan loveliness is bound to plump up your dry lips and perk up your day! Plus, it’s perfectly tinted to instantly up your outfit game. It's the best lip balm for daily use. Lipstick dryness? We don’t know it!
          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Plum-Velvet-Tinted-Fruity-Cruelty/dp/B08MC5MJ33?th=1&linkCode=ll1&tag=myglam09-21&linkId=bd80579da2feb06386d19e30c65dc574&language=en_IN&ref_=as_li_ss_tl">
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
</div>




</div>

    </>
  );
};

export default LipStick5;
