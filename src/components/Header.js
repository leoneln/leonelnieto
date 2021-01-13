import React from 'react';
import { Link } from 'react-scroll';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <section id="scroll" className="scroll">
        <header className="masthead d-flex">
          <div className="container text-center my-auto">
            <h1 className="mb-1 text-white">Leonel Nieto</h1>
            <h4 className="mb-5 text-white">
              <em>"Intellectual growth should commence at birth and cease only at death." -- Albert Einstein</em>
            </h4>
          </div>
          <div className="overlay"></div>
        </header>
        <div className="row text-center">
          <Link className="scroll-link text-white mock-link" to="aboutme"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <span></span><span></span><span></span>Learn More
          </Link>
        </div>
      </section>
    );
  }
}

export default Header;