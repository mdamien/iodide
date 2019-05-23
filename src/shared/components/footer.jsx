/* global IODIDE_PUBLIC */
import React from "react";
import PropTypes from "prop-types";
import styled from "react-emotion";

const FooterContainer = styled("footer")`
  padding-top: 15px;
  padding-bottom: 15px;
  font-size: 0.815rem;
  margin-top: 30px;
  text-align: center;
  color: gray;
`;

const FooterDiv = styled("div")`
  text-align: left;
  padding: 0px;
  width: 100%;
  ul {
    padding-inline-start: 0px;
  }
  li {
    display: inline-block;
    margin-right: 20px;
  }
`;

const Footer = ({ showIcon = true }) => (
  <FooterContainer showIcon={showIcon}>
    <FooterDiv>
      <div>
        <div className="col-sm-12 text-center" style={{ textAlign: "center" }}>
          <div>
            <a href="http://www.parisdescartes.fr/">
              <img
                src="https://linkage.fr/static/img/descartes.png"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://map5.mi.parisdescartes.fr/">
              <img
                src="https://linkage.fr/static/img/map5.jpg"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.cnrs.fr/">
              <img
                src="https://linkage.fr/static/img/cnrs.png"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://www.idfinnov.com/">
              <img
                src="https://linkage.fr/static/img/idfinnov.jpg"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://samm.univ-paris1.fr/">
              <img
                src="https://linkage.fr/static/img/samm.png"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.u-paris.fr/">
              <img
                src="https://linkage.fr/media/Logo_Universit%C3%A9_de_Paris.jpg"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="http://univ-cotedazur.fr">
              <img
                src="https://linkage.fr/media/Logo_universit%C3%A9_c%C3%B4te_azur.png"
                height={35}
                alt="logo"
              />
            </a>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <a href="https://www.univ-paris1.fr/">
              <img
                src="https://linkage.fr/static/img/paris1.png"
                height={35}
                alt="logo"
              />
            </a>
          </div>
        </div>
      </div>
      <p>
        iodide is brought to you by <a href="https://mozilla.org">Mozilla</a>.
      </p>
      {IODIDE_PUBLIC && (
        <p>
          Content available under the terms of the&nbsp;
          <a
            href="https://creativecommons.org/licenses/by-sa/3.0/deed.en"
            target="_blank"
            rel="noopener noreferrer"
          >
            Creative Commons Attribution-ShareAlike 3.0 Unported license
          </a>
          .
        </p>
      )}
      {// only display terms of service on an official mozilla installation
      IODIDE_PUBLIC && (
        <ul>
          <li>Alpha Software</li>
          <li>
            <a href="https://github.com/iodide-project/iodide">Contribute</a>
          </li>
          <li>
            <a href="https://iodide-project.github.io/docs/">Docs</a>
          </li>
          <li>
            <a href="https://www.mozilla.org/about/legal/terms/mozilla">
              Terms
            </a>
          </li>
          <li>
            <a href="https://www.mozilla.org/privacy/websites/">Privacy</a>
          </li>
          <li>
            <a href="https://www.mozilla.org/privacy/websites/#cookies">
              Cookies
            </a>
          </li>
        </ul>
      )}
      <p>
        <small>© 2018-2019 Mozilla and other contributors</small>.
      </p>
    </FooterDiv>
  </FooterContainer>
);

Footer.propTypes = {
  showIcon: PropTypes.bool
};

export default Footer;
