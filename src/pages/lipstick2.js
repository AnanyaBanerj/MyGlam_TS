import React from 'react';
import Postjs from '../js/postjs';



const LipStick2 = () => {
  return (
    <>

<Postjs /><div>
  {/* Header */}
  <header className>
    <div className="nav container">
      <a href="#" className="logo">My<span>Glam</span></a>
      <a href="html/login.html" className="login">Login</a>
    </div>
  </header>
  <section className="home" id="home">
    <div className="home-text container">
      <h4 className="home-title">Lakmé 9TO5 Primer + <br />Matte Lip Color</h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://rukminim2.flixcart.com/image/832/832/kh0vonk0/lipstick/c/a/t/3-6-9to5-primer-matte-lip-color-mp7-lakme-original-imafx4pzzf5pa9hu.jpeg?q=70" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://rukminim2.flixcart.com/image/832/832/kh0vonk0/lipstick/c/a/t/3-6-9to5-primer-matte-lip-color-mp7-lakme-original-imafx4pzzf5pa9hu.jpeg?q=70" alt />
            </div>
            <div>
              <img src="https://rukminim2.flixcart.com/image/832/832/kh0vonk0/lipstick/h/c/u/3-6-9to5-primer-matte-lip-color-mp3-lakme-original-imafx4pzqhpy8g3z.jpeg?q=70" alt />
            </div>
            <div>
              <img src="https://rukminim2.flixcart.com/image/832/832/kh0vonk0/lipstick/c/a/t/3-6-9to5-primer-matte-lip-color-mp7-lakme-original-imafx4pzgbmwsm7w.jpeg?q=70" alt />
            </div>
            <div className="active">
              <img src="https://rukminim2.flixcart.com/image/832/832/kh0vonk0/lipstick/m/y/c/3-6-9to5-primer-matte-lip-color-mr4-lakme-original-imafx4pzymvgszkz.jpeg?q=70" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">Lakmé 9TO5 Primer + Matte Lip Color </span>
          <span className="product-price">₹490</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            {/* <span><i class="fas fa-star-half-alt"></i></span> */}
            <span>13700 ratings</span>
          </div>
          <p className="product-description">With a smooth application and an intense colour payoff, the Lakmé 9to5 Primer + Matte Lip Colors come with a built-in primer that sets a flawless matte base and evens out your lips. Available in 35 highlight pigmented and work-ready shades that last up to 12 hours, touch-ups are now a thing of the past.
          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Lakme-9TO5-Primer-Matte-Color/dp/B08N83FNBB?&linkCode=ll1&tag=myglam09-21&linkId=e3cee707ebca5ec442611cea7c05df9e&language=en_IN&ref_=as_li_ss_tl">
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

    </>
  );
};

export default LipStick2;
