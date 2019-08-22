import React from 'react';
import { Button } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1 text-white">Leonel Nieto</h1>
          <h3 className="mb-5 text-white">
            <em>"A man who carries a cat by the tail learns something he can learn no other way." -- Mark Twain</em>
          </h3>
          <Button color="primary" className="js-scroll-trigger">Learn More</Button>
        </div>
        <div className="overlay"></div>
      </header>
    );
  }
}

export default Header;