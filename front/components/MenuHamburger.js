import { useState } from 'react';

import Navbar from './Navbar';

import classes from '../styles/MenuHamburger.module.css';

function MenuHamburguer() {
  const [menuState, setMenuState] = useState(false);

  const hamburgerMenuHandler = () => {
    setMenuState(!menuState);
  };

  const closeMenuHandler = () => {
    setMenuState(!menuState);
  };

  return (
    <div>
      <div>
        <button
          className={classes['btn-menu']}
          onClick={hamburgerMenuHandler}
        ></button>
      </div>
      <div
        className={
          menuState ? classes['slide-active'] : classes['slide-inactive']
        }
      >
        {menuState && <Navbar onClose={closeMenuHandler} />}
      </div>
    </div>
  );
}

export default MenuHamburguer;
