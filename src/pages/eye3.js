import React from 'react';
import Postjs from '../js/postjs';



const Eye3 = () => {
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
      <h4 className="home-title">PLUM Eye-Swear-By <br/> Kohl Kajal 
</h4>
      <span className="home-subtitle">By Ananya Banerjee <br /> 12th October 2023</span>
    </div>
  </section>
  <div className="main-wrapper">
    <div className="container">
      <div className="product-div">
        <div className="product-div-left">
          <div className="img-container">
            <img src="https://plumgoodness.com/cdn/shop/products/1wbg_ac3a0de4-a8f4-4a74-b598-ce42bb871815_750x.jpg?v=1689145258" alt className="img" />
          </div>
          <div className="hover-container">
            <div>
              <img src="https://plumgoodness.com/cdn/shop/products/1wbg_ac3a0de4-a8f4-4a74-b598-ce42bb871815_750x.jpg?v=1689145258" alt />
            </div>
            <div>
              <img src="https://plumgoodness.com/cdn/shop/products/6cartoon_750x.jpg?v=1689145274" alt />
            </div>
            <div>
              <img src="https://plumgoodness.com/cdn/shop/products/4ingredients_750x.jpg?v=1689145269" alt />
            </div>
            <div className="active">
              <img src="https://plumgoodness.com/cdn/shop/products/5model_750x.jpg?v=1689145272" alt />
            </div>
          </div>
        </div>
        <div className="product-div-right">
          <span className="product-name">Eye-Swear-By Kohl <br/> Kajal - Deep Black

          </span>
          <span className="product-price">₹206</span>
          <div className="product-rating">
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i className="fas fa-star" /></span>
            <span><i class="fas fa-star-half-alt"></i></span>
            <span>2180 ratings</span>
          </div>
          <p className="product-description">
          BOLD BLACK BEAUTY IS JUST A SWIPE AWAY: Let your eyes do the talking with this 100% Vegan black kajal for women that has 4 times the quantities of other kajals, doesn’t cause irritation to sensitive eyes, and has a gel-like formula for easy application. With the goodness of Vitamin-E, it is so comfortable to wear on your waterline for all day wear (so that’s what we call it!) Eye am sure you will love it! MADE WITH LOVE: FDA Approved Free | SLS Free | Cruelty-Free | Paraben Free | For normal and sensitive eyes| For Women | Use in All Seasons

          </p>
          <div className="btn-groups">
            <a href="https://www.amazon.in/Plum-Eye-Swear-Kohl-Kajal-Smudge-Proof/dp/B09GKW2BVZ?th=1&linkCode=ll1&tag=myglam09-21&linkId=c65a65f87af5f3b0e25f28eea8aa71b8&language=en_IN&ref_=as_li_ss_tl">
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

export default Eye3;
