import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import FilterComponent from '../js/FilterComponent';


function home(){

  return(
    
    <Fragment>
      
       <div>
       <FilterComponent />
       {/* Header */}
<header>
  <div className="nav container">
    <a href="/home" className="logo">My<span>Glam</span></a>
    <div className="search-container">
      <input type="text" id="searchInput" placeholder="Search..." />
      <button id="searchButton"><i className="bx bx-search" /></button>
    </div>
    {/* <a href="/templates/login.hbs" className="login">Login</a> */}
    <div className="auth-buttons">
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/register" className="register">
              Register
            </Link>
          </div>
  </div>
</header>

  {/* home */}
  <section className="home" id="home">
    <div className="home-text container">
      <h2 className="home-title">The Ultimate Glam Guide</h2>
      <span className="home-subtitle">Welcome to MyGlam, your one-stop destination for all things beauty. We believe that beauty is not just skin deep; it's a reflection of your unique personality and style. Join us on this beautiful journey to unlock your inner radiance and learn the art of self-expression where we bring you product recommendations catered to your taste. Together, we'll celebrate the beauty in diversity and help you shine your brightest.</span>
    </div>
  </section>
  {/* Post Filter */}
  <div className="post-filter container">
    <span className="filter-item active-filter" data-filter="all">ALL</span>
    <span className="filter-item " data-filter="lips">Lips</span>
    <span className="filter-item " data-filter="cheeks">Cheeks</span>
    <span className="filter-item " data-filter="eyes">Eyes</span>
  </div>
  {/* posts */}
  <section className="post container">
    {/* Post Box 1 */}
    <div className="post-box lips">
      <img src="/IMAGES/lipstick1.jpg" alt className="post-imp" />
      <h2 className="category">Lipstick</h2>
      {/* <a href="/html/lipstick1/index.html" className="post-title">Maybelline New York, Sensational Creamy Matte</a> */}
      <Link to="/lipstick1" className="post-title">Maybelline New York, Sensational Creamy Matte</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Velvety, hydrating matte lipstick for everyday use, Offers a smooth, creamy texture that does not dry out your lips.</p>
    </div>
    {/* Post Box 2 */}
    <div className="post-box lips">
      <img src="/IMAGES/lipstick2.jpg" alt className="post-imp" />
      <h2 className="category">Lipstick</h2>
      <Link to="/lipstick2" className="post-title">Lakme 9 To 5 Primer + Matte Lipstick</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">The Lakme 9 to 5 primer matte lipstick gives you an intense matte and long-lasting finish. It lasts 14 hours for an unstoppable you. No more excusing yourself for a quick touch-up.</p>
    </div>
    {/* Post Box 3 */}
    <div className="post-box lips">
      <img src="/IMAGES/lipstick3.jpg" alt className="post-imp" />
      <h2 className="category">Lipstick</h2>
      {/* <a href="/html/lipstick4/index.html" className="post-title">Maybelline New York Liquid Matte Lipstick</a>
       */}
        <Link to="/lipstick3" className="post-title">Maybelline New York Liquid Matte Lipstick</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Lipstick with a velvety matte finish, Lasts up to 16 hours thanks to its elastic ink technology, Available in several shades. </p>
    </div>
    {/* Post Box 4 */}
    <div className="post-box lips">
      <img src="https://assets.ajio.com/medias/sys_master/root/20220128/xJbP/61f2f36df997dd662341121d/-473Wx593H-4923681940-01mojito-MODEL.jpg" alt className="post-imp" />
      <h2 className="category">Lip Balm</h2>
      {/* <a href="post-page.html" className="post-title">SUGAR Cosmetics-Tipsy Lips-Moisturizing Balm</a> */}
      
      <Link to="/lipstick4" className="post-title">SUGAR Cosmetics-Tipsy Lips-Moisturizing Balm</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Keeps lips supple and moisturized. - Enriched with Jojoba Oil &amp; Vitamin E. </p>
    </div>
    {/* Post Box 5 */}
    <div className="post-box lips">
      <img src="https://plumgoodness.com/cdn/shop/products/CandyMeltsVeganLipBalm_RedVelvetLove_01_750x.jpg?v=1632452212" alt className="post-imp" />
      <h2 className="category">Lip Balm</h2>
      {/* <a href="/html/lipstick5/index.html" className="post-title">Plum Candy Melts Vegan Lip Balm </a> */}
      <Link to="/lipstick5" className="post-title">Plum Candy Melts Vegan Lip Balm</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Nourishing carrot seed oil to repair sun-damaged and chapped lips, rich cocoa butter and shea butter will instantly moisturize and plump your lips. </p>
    </div>
    {/* Post Box 6 */}
    <div className="post-box lips">
      <img src="/IMAGES/lipstick6.jpg" alt className="post-imp" />
      <h2 className="category">Lip Mask</h2>
      <Link to="/lipstick6" className="post-title">Laneige Lip Sleeping Mask</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">This nourishing overnight lip mask is enriched with Berry Fruit Complex, Vitamin C, and coconut oil to leave lips soft and visibly smooth.</p>
    </div>
    {/* CATEGORY END*/}
    {/* Post Box 1 */}
    <div className="post-box cheeks">
      <img src="/IMAGES/cheek1.jpg" alt className="post-imp" />
      <h2 className="category">Tint</h2>
      {/* <a href="/html/cheek1/index.html" className="post-title">ETUDE Dear Darling Water Gel Lip &amp; Cheek Tint</a> */}
      
      <Link to="/cheek1" className="post-title">ETUDE Dear Darling Water Gel Lip &amp; Cheek Tint</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Get your Korean Makeup game On with Etude House Lip and CheekTint. Long Lasting LiStay fabulous for hours on end, no touch-ups needed!</p>
    </div>
    {/* Post Box 2 */}
    <div className="post-box cheeks">
      <img src="/IMAGES/cheek2.jpg" alt className="post-imp" />
      <h2 className="category">Blush</h2>
      {/* <a href="/html/cheek2/index.html" className="post-title">Maybelline New York Fit Me Mono Blush</a> */}
      <Link to="/cheek2" className="post-title">Maybelline New York Fit Me Mono Blush</Link>

      <span className="post-date">12 October 2023</span>
      <p className="post-description">Silky-smooth blush enhances skin tone, Available in several shades
        True-to-tone colour blush, Natural looking results. </p>
    </div>
    {/* Post Box 3 */}
    <div className="post-box cheeks">
      <img src="/IMAGES/cheek3.jpg" alt className="post-imp" />
      <h2 className="category">Blush</h2>
      {/* <a href="post-page.html" className="post-title">Swiss Beauty Ultra Blush Palette</a> */}
      <Link to="/cheek3" className="post-title">Swiss Beauty Ultra Blush Palette</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Superfine Particles: Swiss Beauty’s Ultra Blush Palette has exclusively superfine particles that glide over the skin.</p>
    </div>
    {/* Post Box 4 */}
    <div className="post-box cheeks">
      <img src="/IMAGES/cheek4.png" alt className="post-imp" />
      <h2 className="category">Blush</h2>
      {/* <a href="post-page.html" className="post-title">PIXI Cream Blush Stick</a> */}
      <Link to="/cheek4" className="post-title">PIXI Cream Blush Stick</Link>

      <span className="post-date">12 October 2023</span>
      <p className="post-description">Versatile Blush for Cheeks and Lips: This cream blush stick is available in 3 colors for you choice, apply our cream blush stick to your complexion to get a natural shine and bring a facial flush.</p>
    </div>
    {/* Post Box 5 */}
    <div className="post-box cheeks">
      <img src="/IMAGES/cheek5..jpg" alt className="post-imp" />
      
      <h2 className="category">Highlighter</h2>
      {/* <a href="post-page.html" className="post-title">Swiss Beauty Brick Highlighter</a> */}
      <Link to="/cheek5" className="post-title">Swiss Beauty Brick Highlighter</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Four beautiful colors SWISS BEAUTY Brick Highlighter used as together for a captivating glow or use individually to illuminate key features. The highlighter illuminates the complexion and gives a multidimensional sculpted look.</p>
    </div>
    {/* Post Box 6 */}
    <div className="post-box cheeks">
      <img src="/IMAGES/cheek6.jpg" alt className="post-imp" />
      <h2 className="category">Highlighter</h2>
      {/* <a href="lipstick1.html" className="post-title">SUGAR Cosmetics - Face Fwd</a> */}
      <Link to="/cheek6" className="post-title">SUGAR Cosmetics - Face Fwd</Link>

      <span className="post-date">12 October 2023</span>
      <p className="post-description">Illuminating highlighters in buttery soft and creamy texture. Super pigmented and buildable formula. Can be used under or over foundation</p>
    </div>
    {/* CATEGORY OVER  */}
    {/* Post Box 1 */}
    <div className="post-box eyes">
      <img src="/IMAGES/eye1.jpg" alt className="post-imp" />
      <h2 className="category">Eyeliner</h2>
      {/* <a href="post-page.html" className="post-title">Maybelline New York Eyeliner</a> */}
      <Link to="/eye1" className="post-title">Maybelline New York Eyeliner</Link>
      <span className="post-date">12 October 2023</span>
      <p className="post-description">Highly pigmented waterproof eye liner, Ideal for defined lines and a range of looks, Perfect for daily use.</p>
    </div>
    {/* Post Box 8 */}
    <div className="post-box eyes">
      <img src="/IMAGES/eye2.jpg" alt className="post-imp" />
      <h2 className="category">Eyeliner</h2>
      {/* <a href="post-page.html" className="post-title">SUGAR POP Matte Eyeliner</a> */}
      <Link to="/eye2" className="post-title">SUGAR POP Matte Eyeliner</Link>

      <span className="post-date">12 October 2023</span>
      <p className="post-description">This SUGAR POP eyeliner pigmented to the highest degree has a waterproof formula and super-staying power.
      </p>
    </div>
    {/* Post Box 9 */}
    <div className="post-box eyes">
      <img src="/IMAGES/eye3.webp" alt className="post-imp" />
      <h2 className="category">Kohl Liner</h2>
      {/* <a href="post-page.html" className="post-title">Plum Eye-Swear-By Kajal</a> */}
      <Link to="/eye3" className="post-title">Plum Eye-Swear-By Kajal</Link>

      <span className="post-date">12 October 2023</span>
      <p className="post-description">PLUM EYE-SWEAR-BY KOHL KAJAL comes in a retractable pencil for ease of use. You’ll swear by its creamy smooth, single stroke application, deep black pigment &amp; matte finish!
      </p>
    </div>
  </section>
  {/* FOOTER */}
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
  {/* #colophon */}
  {/* js */}
  {/* jquery */}
  {/* bootstrap */}


</div>

    </Fragment>
      // <FilterComponent />
  )
}

export default home;