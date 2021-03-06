import React from "react";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-12">
            <span className="copyright">
              Copyright © Wage Edge {new Date().getFullYear()}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;

/* 
<div className="col-md-4">
            <ul className="list-inline social-buttons">
              <li className="list-inline-item">
                <a href="/">
                  <i className="fab fa-twitter" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <i className="fab fa-facebook-f" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="/">
                  <i className="fab fa-linkedin-in" />
                </a>
              </li>
            </ul>
          </div>
          <div className="col-md-4">
            <ul className="list-inline quicklinks">
              <li className="list-inline-item">
                <a href="/">Privacy Policy</a>
              </li>
              <li className="list-inline-item">
                <a href="/">Terms of Use</a>
              </li>
            </ul>
          </div> 

*/
