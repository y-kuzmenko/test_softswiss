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
    <div className="app">
      <header className="header">
        <a href="https://www.softswiss.com/" target="_blank">
          <img src={logo} className="header_logo" alt="logo" />
        </a>
        <div className='header_nav'>
          <a
            className="nav_link"
            href="#"
          >
            Home
          </a>
          <a
            className="nav_link"
            href="https://www.softswiss.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Products
          </a>
          <a
            className="nav_cart"
            href="#"
            onMouseOver={handleMouseOver} 
            onMouseOut={handleMouseOut}
          >
            <img 
              src={cartLogo} 
              className="header_logo--cart" 
              alt="logo"
             />
          </a>
        </div>
        <div class="header__menu">
          <input type="checkbox" id="burger-checkbox" class="menu__burger-checkbox"></input>
          <label for="burger-checkbox" class="menu__burger"></label>
          <ul class="menu-list">
              <li><a href="#" class="list__item">Home</a></li>
              <li><a 
                    href="https://www.softswiss.com" 
                    class="list__item" 
                    target="_blank"
                    rel="noopener noreferrer"
                  >Products</a></li>
              <li><a href="#" class="list__item">Cart</a></li>
          </ul>
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
            <article className='content__block content__block--1'>
              <div className='block_text'>
                <h2>
                  Move the borders <br />
                  of reality!
                </h2>
                <p>Go on a space adventure<span> - it's possible with us!</span></p>
                <button className='btn_transparent btn_transparent_title'>Learn more</button>
              </div>
            </article>
            <article className='content__block content__block--2'>
              <div className='block_text'>
                <h3>
                Space is not <br />
                just stars and <br />
                planets
                </h3>
                <p className='hidden'>Go on a space adventure</p>
                <p className='visible'>it is a majestic journey to</p>
                <button className='btn_transparent btn_transparent_title'>Learn more</button>
              </div>
            </article>
            <article className='content__block content__block--3'>
              <div className='block_text'>
                <h3>
                For those <br />
                who dream <br />
                of stars  
                </h3>
                <p>Our offer: make your dream come true</p>
                <button className='btn_transparent btn_transparent_title'>Learn more</button>
              </div>
            </article>
            <article className='content__block content__block--4'>
              <div className='block_text'>
                <h2>
                Fulfill your
                fantastic dreams
                </h2>
                <p>Space has never been so close</p>
                <button className='btn_transparent btn_transparent_title'>Learn more</button>
              </div>
            </article>
          </div>
          <div className="content__description">
            <h4 className="description__title">Embark on a space journey</h4>
              <div class="description__text">
                <p class="description__text--start">
                Travelling into space is one of the most exciting and unforgettable adventures that can 
                change your life forever. And if you have ever dreamed of exploring stars, planets and 
                galaxies, then our company is ready to help you realize this dream. We offer a uni
                </p>
                <span class="description__text--dots">...</span>
                <p class="description__text--end hidden">
                que experience that will allow you to go on a space journey and see all the secrets of the 
                universe. We guarantee that every moment in space will be filled with incredible impressions, 
                excitement and new discoveries. Our team of professionals takes care of your safety and 
                comfort so that you can fully enjoy your adventure in space. We offer various options for 
                space excursions.
                </p>
                <input type="checkbox" id="btn" />
                <label for="btn" class="read-more"></label>
              </div>
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
