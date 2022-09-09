import * as React from "react";
import "../sass/main.css";

const Navbar = () => {
  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="nav-toggle"
      ></input>
      <label htmlFor="nav-toggle" className="navigation__button">
        <span className="navigation__icon">&nbsp;</span>
      </label>
      <div className="navigation__background">&nbsp;</div>
      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="/milan/" className="navigation__link">
              Home
            </a>
          </li>
          <li className="navigation__item">
            <a href="/milan/schedule" className="navigation__link">
              Schedule
            </a>
          </li>
          <li className="navigation__item">
            <a href="/milan/events" className="navigation__link">
              Events
            </a>
          </li>
          <li className="navigation__item">
            <a href="/milan/sponsors" className="navigation__link">
              Sponsors
            </a>
          </li>
          <li className="navigation__item">
            <a href="/milan/members" className="navigation__link">
              Team
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://heyzine.com/flip-book/59f3755f85.html"
              className="navigation__link"
            >
              Rulebook
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
