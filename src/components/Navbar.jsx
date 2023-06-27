import { useState } from 'react';
import { useGlobalContext } from '../context';
import Modal from './Modal';
import logo from '../assets/logo.png';
import links from './links';
import socialLinks from './socialLinks';

const Navbar = () => {
  const { cartList } = useGlobalContext();
  const [modal, setModal] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-center">
        <div className="nav-header">
          <img src={logo} className="nav-logo" alt="backroads" />
          <button type="button" className="nav-toggle" id="nav-toggle">
            <i className="fas fa-bars"></i>
          </button>
        </div>

        <ul className="nav-links" id="nav-links">
          {links.map((link) => {
            const { id, linkName, description } = link;
            return (
              <li key={id}>
                <a href={linkName} className="nav-link">
                  {description}
                </a>
              </li>
            );
          })}
        </ul>

        <ul className="nav-icons">
          {socialLinks.map((link) => {
            const { id, URL, icon } = link;
            return (
              <li key={id}>
                <a
                  href={URL}
                  target="_blank"
                  rel="noreferrer"
                  className="nav-icon"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <div className="cart">
          {modal && <Modal />}
          <span className="blip">{cartList.length}</span>
          <i
            className="fa-solid fa-cart-shopping nav-icon"
            onClick={() => setModal(!modal)}
          ></i>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
