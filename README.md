
## Home.js

Represents a page for displaying beauty products categorized by their type. The component uses React Router (Link from 'react-router-dom') for navigation.


```
import React, { Fragment } from "react";
import { Link } from 'react-router-dom';
import FilterComponent from '../js/FilterComponent';

```


* `import React, { Fragment } from "react";`: Imports the React library and the Fragment component from the React library. The Fragment component is used to group multiple elements without introducing additional nodes in the DOM.

* `import { Link } from 'react-router-dom';`: Imports the Link component from the 'react-router-dom' library. This component is used for navigation between different routes in a React application.

* `import FilterComponent from '../js/FilterComponent';`: Imports the FilterComponent from a file located at '../js/FilterComponent'. This suggests that there is a custom filter component defined in the specified file.

### Header Section

```
function home() {
  return (
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
      </div>
    </Fragment>
  );
}

```

* `<div className="nav container">` : A container for the navigation content with a class name "nav" and "container". The "container" class likely indicates that the content should be styled as part of a container.

* `<a href="/home" className="logo">My<span>Glam</span></a>`: An anchor element representing the logo. The logo has a link ("/home"), and the text "MyGlam" with "Glam" wrapped in a span element.

* `<div className="search-container">` : Container for the search input and button.

* `<input type="text" id="searchInput" placeholder="Search..." />`: An input field for searching with an id "searchInput" and a placeholder "Search...".

* `<button id="searchButton"><i className="bx bx-search" /></button>` : A button for triggering the search, containing an icon represented by the class "bx bx-search".

* `auth-buttons` : A container for authentication-related buttons.

* `<Link to="/login" className="login">Login</Link>` : A React Router Link component that links to "/login". It represents a "Login" button with the class "login".

*  `<Link to="/register" className="register">Register</Link>`: Similar to the login link, this represents a "Register" button.

In summary, this component defines the structure of a header section for a webpage, including a logo, search functionality, and authentication buttons for login and registration. The FilterComponent is also included within the home component.

```

  {/* home */}
  <section className="home" id="home">
    <div className="home-text container">
      <h2 className="home-title">The Ultimate Glam Guide</h2>
      <span className="home-subtitle">Welcome to MyGlam, your one-stop destination for all things beauty. We believe that beauty is not just skin deep; it's a reflection of your unique personality and style. Join us on this beautiful journey to unlock your inner radiance and learn the art of self-expression where we bring you product recommendations catered to your taste. Together, we'll celebrate the beauty in diversity and help you shine your brightest.</span>
    </div>
  </section>
  ```


`<section className="home" id="home">:`

* This represents a section element with the class "home" and the id "home." It's a common practice to use these identifiers for styling and navigation purposes.
`<div className="home-text container">`:

* Inside the section, there's a div element with the class "home-text" and "container." This suggests that the content within this div is styled and structured as part of a container.
`<h2 className="home-title">The Ultimate Glam Guide</h2>`:

* This is an <h2> (heading level 2) element with the class "home-title," containing the text "The Ultimate Glam Guide." This is likely a prominent title for the home section.
`<span className="home-subtitle">...</span>`:

* This is a <span> element with the class "home-subtitle." It contains a longer piece of text, likely a subtitle or introductory paragraph welcoming users to MyGlam and providing information about the purpose of the platform.

```

<div className="post-filter container">
    <span className="filter-item active-filter" data-filter="all">ALL</span>
    <span className="filter-item" data-filter="lips">Lips</span>
    <span className="filter-item" data-filter="cheeks">Cheeks</span>
    <span className="filter-item" data-filter="eyes">Eyes</span>
</div>

```

* `<div className="post-filter container">: `This is a div element with the class name "post-filter" and "container". The class names are often used for styling purposes with CSS.

* `<span className="filter-item active-filter" data-filter="all">ALL</span>`: This is a span element with the class name "filter-item" and "active-filter". It also has a custom attribute data-filter set to "all". The content of the span is "ALL". The "active-filter" class suggests that this item is initially selected or highlighted.

* `<span className="filter-item" data-filter="lips">Lips</span>` : Another span element representing a filter item for "Lips". It has the class name "filter-item" and a custom attribute data-filter set to "lips".

* `<span className="filter-item" data-filter="cheeks">Cheeks</span>` : Similar to the previous filter item, but this one is for "Cheeks".

* `<span className="filter-item" data-filter="eyes">Eyes</span>` : Again, another filter item for "Eyes".

The purpose of this code is to create a set of filter options for a user interface. 

```
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
</section>
```

* `<section className="post container">` : This is a section element with the class name "post" and "container". It seems to represent a section of the webpage related to posts.

* `{/* Post Box 1 */}`: This is a comment in JSX (JavaScript XML). Comments in JSX are enclosed in curly braces and are not rendered to the DOM. It indicates that what follows is the first post box.

* `<div className="post-box lips">` : This is a div element with the class name "post-box" and "lips". It likely represents a container for a post related to lips.

* `<img src="/IMAGES/lipstick1.jpg" alt className="post-imp" />:` An img (image) element with the source attribute pointing to "/IMAGES/lipstick1.jpg". The alt attribute is present but empty. The class "post-imp" is likely used for styling.

* `<h2 className="category">Lipstick</h2>`: An h2 (heading level 2) element with the class name "category" indicating the category of the post, which is "Lipstick" in this case.

* `{/* <a href="/html/lipstick1/index.html" className="post-title">Maybelline New York, Sensational Creamy Matte</a> */}` : This is a commented-out a (anchor) element that seems to represent a link to the detailed page for this post. The link is disabled or not used in the current code.

* `<Link to="/lipstick1" className="post-title">Maybelline New York, Sensational Creamy Matte</Link>` : This is a Link component, which is commonly used in React.js for navigation. It is similar to an anchor (<a>) tag but is specific to React Router. The to prop specifies the destination, and the class "post-title" is likely used for styling.

* `<span className="post-date">12 October 2023</span>` : A span element with the class name "post-date" indicating the date of the post.

* `<p className="post-description">` </p>: A p (paragraph) element with the class name "post-description" providing a description of the post content.


Similar to the presented post featuring Maybelline New York's Sensational Creamy Matte lipstick, every post adheres to a standardized design. Each post is encapsulated within a designated container, beginning with a thematic image accompanied by relevant details such as the post category, title, date of publication, and a concise description. This approach not only ensures a visually cohesive presentation but also streamlines navigation for users, allowing them to easily identify and engage with diverse content across the platform. 

```
{/* FOOTER */}
<footer id="colophon" className="site-footer" role="contentinfo">
    <div className="social-wrapper">
        <ul>
            <li>
                <a href="#" target="_blank">
                    <img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/twitter-128.png" alt="Twitter Logo" className="twitter-icon" />
                </a>
            </li>
            <!-- More social media links with icons -->
        </ul>
    </div>
    <nav className="footer-nav" role="navigation">
        <p>Copyright © 2023 - All rights reserved.</p>
    </nav>
</footer>
```
Here's an explanation of each part:

* `<footer id="colophon" className="site-footer" role="contentinfo">` : This is the opening tag of the footer section. It has an id attribute set to "colophon," a class attribute set to "site-footer," and a role attribute set to "contentinfo." The id attribute is often used for uniquely identifying the element, and the class attribute is used for styling purposes.

* `<div className="social-wrapper">` : This div contains a set of social media links with corresponding icons.

* `<ul>:` This is an unordered list that contains a series of list items (<li>), each representing a social media platform.

Social media links:

Each <li> contains an <a> (anchor) element with an href attribute pointing to a specific social media profile or page. The target="_blank" attribute opens the link in a new browser tab or window.

</footer>: This is the closing tag of the footer section, marking the end of the footer content.



##lipstick1.js
```
    

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
                creamy feel to it? Look no further.
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

```


The provided code is a React.js component that represents a product page. Let's break down the structure and functionality of the component:

`<Postjs />`: This seems to be a custom React component named "Postjs." However, the implementation details of this component are not provided in the code snippet.

`<header className="">` : This is the header section of the page. Inside, there is a navigation bar `(<div className="nav container">)` with a logo `(<a className="logo">)` and a login link `(<a className="login">).`

`<section className="home" id="home">` : This is a section with the class "home" and an ID of "home." It appears to contain text related to the post, such as the post title `(<h4 className="home-title">)` and subtitle `(<span className="home-subtitle">)`, providing information about the author and the date of the post.

`<div className="main-wrapper">:` This is the main content wrapper, containing product details within a container `(<div className="container">)`.

Product Details:

The left side `(<div className="product-div-left">)` contains an image container with a main product image `(<div className="img-container"><img className="img" />)` and a hover container with additional product images `(<div className="hover-container">)`. It seems to implement an image carousel with different views of the product.
The right side `(<div className="product-div-right">)` displays details such as the product name `(<span className="product-name">)`, price `(<span className="product-price">)`, product rating `(<div className="product-rating">)`, product description `(<p className="product-description">)`, and a button group with a link to buy the product on Amazon `(<div className="btn-groups"><a><button></button></a></div>)`.
The Amazon link in the button group directs the user to the product page on Amazon when clicked.


The website incorporates a modular design for product pages, employing a React component structure to ensure consistency and scalability. Leveraging reusable components, such as the "Postjs" module, each page features a standard layout with header navigation, detailed product information, and a footer. The modular approach enables efficient development and maintenance, allowing for rapid creation of similar pages for various cosmetic products. Data-driven components dynamically populate content, facilitating seamless expansion of the product catalog while maintaining a cohesive user interface. This technical strategy optimizes codebase management and promotes a streamlined user experience across the website's diverse range of cosmetic offerings.








