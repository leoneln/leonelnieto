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
            <h3 className="mb-5 text-white">
              <em>"A man who carries a cat by the tail learns something he can learn no other way." -- Mark Twain</em>
            </h3>
            <Link className="scroll-link text-white mock-link" to="aboutme"
              spy={true}
              smooth={true}
              duration={1000}
            ><span></span><span></span><span></span>Learn More
            </Link>
          </div>
          <div className="overlay"></div>
        </header>
      </section>
    );
  }
}

export default Header;