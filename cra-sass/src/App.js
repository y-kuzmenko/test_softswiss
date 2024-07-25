import { useState } from 'react';

import logo from './assets/svg/logo.svg';
import cart from './assets/svg/cart.svg';
import cart_hover from './assets/svg/cart_hover.svg';
import rocket from './assets/images/footer/rocket.png';
import './App.scss';

function App() {
  const [cartLogo, setCartLogo] = useState(cart);

  const handleMouseOver = () => {
    setCartLogo(cart_hover);
  };

  const handleMouseOut = () => {
    setCartLogo(cart);
  };
  return (
    <div className="App">
      <header className="header">
        <img src={logo} className="header_logo" alt="logo" />
        <div className='header_nav'>
          <a
            className="nav_link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Home
          </a>
          <a
            className="nav_link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Products
          </a>
          <a
            className="nav_cart"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
          >
            <img 
              src={cartLogo} 
              className="header_logo" 
              alt="logo"
             />
          </a>
        </div>
      </header>
      <main>
        <article className='panel'>
          <div className='panel_text'>
            <h1>
              Discover the vast <br />
              expanses of <span>space</span>
            </h1>
            <h3>Where the possibilities are <span>endless!</span></h3>
            <button className='btn btn_title'>Learn more</button>
          </div>
        </article>
        <section className='content'>
          <h4 className="content__title">Offers</h4>
          <div className='content__blocks'>
            <article className='content__block content__block--1'></article>
            <article className='content__block content__block--2'></article>
            <article className='content__block content__block--3'></article>
            <article className='content__block content__block--4'></article>
          </div>
          <div className="content__description">
            <h4 className="description__title">Embark on a space journey</h4>
            <p className="description__text">
            Travelling into space is one of the most exciting and unforgettable adventures that can 
            change your life forever. And if you have ever dreamed of exploring stars, planets and 
            galaxies, then our company is ready to help you realize this dream. We offer a unique 
            experience that will allow you to go on a space journey and see all the secrets of the 
            universe. We guarantee that every moment in space will be filled with incredible impressions, 
            excitement and new discoveries. Our team of professionals takes care of your safety and 
            comfort so that you can fully enjoy your adventure in space. We offer various options for 
            space excursions.
            </p>
            <label for="read-more" class="description__read-more">Read More</label>
          </div>
        </section>
      </main>
      <footer className="footer">
        <img src={rocket} className="footer_logo" alt="rocket" />
        <p>Exciting space adventure!</p>
      </footer>
    </div>
  );
}

export default App;
