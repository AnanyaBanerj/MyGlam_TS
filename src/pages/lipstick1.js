import React from 'react';
import Postjs from '../js/postjs';



const LipStick1 = () => {
  return (
    <>

<Postjs />
      <header className="">
        <div className="nav container">
          <a href="#" className="logo">
            My<span>Glam</span>
          </a>
          <a href="html/login.html" className="login">
            Login
          </a>
        </div>
      </header>

      <section className="home" id="home">
        <div className="home-text container">
          <h4 className="home-title">
            Maybelline New York, <br /> Sensational Creamy Matte
          </h4>
          <span className="home-subtitle">
            By Ananya Banerjee <br /> 12th October 2023
          </span>
        </div>
      </section>

      <div className="main-wrapper">
        <div className="container">
          <div className="product-div">
            <div className="product-div-left">
              <div className="img-container">
                <img
                  src="https://images-static.nykaa.com/media/catalog/product/e/6/e6d65cd41554453645_1.jpg?tr=w-344,h-344,cm-pad_resize"
                  alt=""
                  className="img"
                />
              </div>
              <div className="hover-container">
                <div>
                  <img
                    src="https://images-static.nykaa.com/media/catalog/product/e/6/e6d65cd41554453645_1.jpg?tr=w-344,h-344,cm-pad_resize"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images-static.nykaa.com/media/catalog/product/e/6/e6d65cd41554453645_2.jpg?tr=w-344,h-344,cm-pad_resize"
                    alt=""
                  />
                </div>
                <div>
                  <img
                    src="https://images-static.nykaa.com/media/catalog/product/e/e/eea75cd41554429930_3.jpg?tr=w-344,h-344,cm-pad_resize"
                    alt=""
                  />
                </div>
                <div className="active">
                  <img
                    src="https://images-static.nykaa.com/media/catalog/product/e/e/eea75cd41554429930_4.jpg?tr=w-344,h-344,cm-pad_resize"
                    alt=""
                  />
                </div>
              </div>
            </div>
            <div className="product-div-right">
              <span className="product-name">
                Maybelline New York Color Sensational Creamy Matte Lipstick
              </span>
              <span className="product-price">Rs.299</span>
              <div className="product-rating">
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                <span>
                  <i className="fas fa-star"></i>
                </span>
                {/* <span><i className="fas fa-1"></i></span> */}
                <span>58000 ratings</span>
              </div>

              <p className="product-description">
                Looking for a lipstick that gives a matte finish but also has a
                creamy feel to it? Look no further. The Maybelline Color
                Sensational Creamy Matte Lipstick delivers crisp, vibrant lip
                colour and smooth, supple lips. Maybelline Color Sensational
                takes on a new feeling with this creamy lipstick formula that is
                available in multiple ultra-flattering shades. This creamy
                lipstick is infused with shea butter that keeps your lips
                moisturised and gorgeous for up to 12 hours.
              </p>
              <div className="btn-groups">
                {/* <a href="">
                  <button type="button" className="add-cart-btn">
                    <i className="fas fa-shopping-cart"></i>Add to Cart
                  </button>
                </a> */}

                <a href="https://www.amazon.in/Maybelline-Color-Sensational-Creamy-Nuance/dp/B00YJJWBUA?&linkCode=ll1&tag=myglam09-21&linkId=45cb5c9069af750bb5f6878bd13f762f&language=en_IN&ref_=as_li_ss_tl">
                  <button type="button" className="add-cart-btn">
                    <i className="fas fa-wallet"></i>Link to Buy
                  </button>
                </a>
              </div>

              {/* <div className="btn-groups">
                <a href="add_to_cart_url" className="add-cart-btn">
                  <i className="fas fa-shopping-cart"></i>Add to Cart
                </a>
                <a href="link_to_buy_url" className="add-cart-btn">
                  <i className="fas fa-wallet"></i>Link to Buy
                </a>
              </div> */}
            </div>
          </div>
        </div>
      </div>

      <footer id="colophon" className="site-footer" role="contentinfo">
        <div className="social-wrapper">
          <ul>
            <li>
              <a href="#" target="_blank">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png"
                  alt="Twitter Logo"
                  className="twitter-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/ananya._banerjee/"
                target="_blank"
              >
                <img
                  src="https://png.pngtree.com/png-clipart/20230401/original/pngtree-three-dimensional-instagram-icon-png-image_9015419.png"
                  alt="Instagram Logo"
                  className="instagram-icon"
                />
              </a>
            </li>
            <li>
              <a href="https://www.linkedin.com/feed/" target="_blank">
                <img
                  src="https://img.freepik.com/premium-vector/square-linkedin-logo-isolated-white-background_469489-892.jpg"
                  alt="Linkedin Logo"
                  className="linkedin-icon"
                />
              </a>
            </li>
            <li>
              <a href="#" target="_blank">
                <img
                  src="https://png.pngtree.com/png-clipart/20180515/ourmid/pngtree-facebook-logo-facebook-icon-png-image_3566127.png"
                  alt="Facebook Logo"
                  className="facebook-icon"
                />
              </a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/channel/UCOwyzSDlwa7azr4CxsFiNew"
                target="_blank"
              >
                <img
                  src="https://lh3.googleusercontent.com/j_RwVcM9d47aBDW5DS1VkdxUYCkDUCB6wZglv4x-9SmsxO0VaFs7Csh-FmKRCWz9r_Ef=w170"
                  alt="Youtube Logo"
                  className="youtube-icon"
                />
              </a>
            </li>
          </ul>
        </div>

        <nav className="footer-nav" role="navigation">
          <p>Copyright © 2023 - All rights reserved.</p>
        </nav>
      </footer>

      {/* js */}
      <script src="script.js"></script>
    </>
  );
};

export default LipStick1;
