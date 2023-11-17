import React from 'react';
import Postjs from '../js/postjs';



const LipStick3 = () => {
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
      <h4 className="home-title">Maybelline New York, <br /> Liquid Matte Lipstick</h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255151/maybelline-new-york-super-stay-matte-ink-liquid-lipstick-transformer-5-g-94_1_display_1691560460_09961a84.jpg" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255151/maybelline-new-york-super-stay-matte-ink-liquid-lipstick-transformer-5-g-94_1_display_1691560460_09961a84.jpg" alt />
            </div>
            <div>
              <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255151/maybelline-new-york-super-stay-matte-ink-liquid-lipstick-transformer-5-g-94_3_display_1691560464_dfebe7d1.jpg" alt />
            </div>
            {/* <div>
                          <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255151/maybelline-new-york-super-stay-matte-ink-liquid-lipstick-transformer-5-g-94_5_display_1691560467_b5e999cc.jpg" alt="">
                      </div> */}
            <div className="active">
              <img src="https://media6.ppl-media.com/tr:h-750,w-750,c-at_max,dpr-2/static/img/product/255151/maybelline-new-york-super-stay-matte-ink-liquid-lipstick-transformer-5-g-94_5_display_1691560467_b5e999cc.jpg" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">SUPER STAY MATTE INK
          </span>
          <span className="product-price">₹419</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>22900 ratings</span>
          </div>
          <p className="product-description">Find your ideal lipstick with SuperStay Matte Ink Liquid Lipstick. The formula is so longlasting, that it stays on your lips for up to 12 hours, no-transfer! It features a unique arrow applicator for precise application. This matte lipstick is non drying so it feels comfortable to wear all day long, even on dry lips. This kiss proof lipstick glides onto lips with liquid precision giving you the red or nude lipstick you've always wanted! With so many shades to choose from we've got you covered for every occasion, from natural nude looks to a bold red lip that is perfect for a party.
          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Maybelline-Super-Liquid-Lipstick-Founder/dp/B07KY925H2?th=1&linkCode=ll1&tag=myglam09-21&linkId=65d328208ca7529ab8dc80af779253a1&language=en_IN&ref_=as_li_ss_tl">
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

export default LipStick3;
