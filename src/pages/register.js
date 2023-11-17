import React from 'react';
import { Link } from 'react-router-dom';

export default function Login() {
  return (
    <div>
      {/* Header */}
      <header>
        <div className="nav container">
          <a href="/" className="logo">
            My<span>Glam</span>
          </a>
          <div className="search-container">
            {/* Add your search input and button here if needed */}
          </div>
          <div className="auth-buttons">
            <Link to="/login" className="login">
              Login
            </Link>
            <Link to="/register" className="login">
              Register
            </Link>
          </div>
        </div>
      </header>

      {/* Home */}
      <section className="home" id="home">
        <div className="home-text container">
          <h2 className="home-title">The Ultimate Glam Guide</h2>
          <span className="home-subtitle">
            Welcome to MyGlam, your one-stop destination for all things beauty.
            We believe that beauty is not just skin deep; it's a reflection of
            your unique personality and style. Join us on this beautiful journey
            to unlock your inner radiance and learn the art of self-expression
            where we bring you product recommendations catered to your taste.
            Together, we'll celebrate the beauty in diversity and help you
            shine your brightest.
          </span>
        </div>
      </section>

      {/* Register Form */}
      <form className="regpage">
        <h1>Register here...</h1>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <button className='button1'>Register</button>
      </form>
    </div>
  );
}

