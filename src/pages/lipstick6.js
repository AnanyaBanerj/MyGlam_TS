import React from 'react';
import Postjs from '../js/postjs';



const LipStick6 = () => {
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
      <h4 className="home-title">Laneige Lip <br />Sleeping Mask              </h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://www.laneige.com/int/en/skincare/__icsFiles/afieldfile/2022/07/01/20210127_final_lip-sleeping-mask_pdp_thumbnail_03_pc_1.jpg" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://www.laneige.com/int/en/skincare/__icsFiles/afieldfile/2022/07/01/20210127_final_lip-sleeping-mask_pdp_thumbnail_03_pc_1.jpg" alt />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/71HxETe-KVL._SL1500_.jpg" alt />
            </div>
            <div>
              <img src="https://m.media-amazon.com/images/I/61Xj3oKUtPL._SL1080_.jpg" alt />
            </div>
            <div className="active">
              <img src="https://m.media-amazon.com/images/I/61s76bhzgWL._SL1200_.jpg" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">Laneige Lip Sleeping Mask
          </span>
          <span className="product-price">₹508</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star-half-alt" /></span>
            <span>612 ratings</span>
          </div>
          <p className="product-description">
            This nourishing overnight lip mask is enriched with Berry Fruit Complex, Vitamin C, and coconut oil to leave lips soft and visibly smooth.
          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Laneige-Sleeping-Moisturizing-Vitamin-Antioxidant/dp/B0BPC8KG73?&linkCode=ll1&tag=myglam09-21&linkId=0490f00f42df1eed5be5b39d1b3cbc21&language=en_IN&ref_=as_li_ss_tl">
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

export default LipStick6;
