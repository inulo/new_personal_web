import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    if (!this.props.data) return null;

    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url} target="_blank" rel="noreferrer">
            <i className={network.className}></i>
          </a>
        </li>
      );
    });

    return (
      <footer>
        <div className="row">
          <Fade top>
            <div className="twelve columns" >
              <ul className="social-links">{networks}</ul>

              <ul className="copyright">
                <li>&copy; 2020 - {new Date().getFullYear()}</li>
                <li>
                  {" "}
                  <a href='#home'  title="Veselin S Kanchev">
                    Veselin S Kanchev
                  </a>
                </li>
              </ul>
            </div>
          </Fade>

          {/* <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div> */}
        </div>
      </footer>
    );
  }
}

export default Footer;
