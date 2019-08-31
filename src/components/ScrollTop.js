import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ScrollTop extends React.Component {
  state = {}
  render() {
    return (
      <>
        <Link className="mock-link scroll-to-top rounded js-scroll-trigger"
          to="top-page"
          spy={true}
          smooth={true}
          duration={1000}>
          <FontAwesomeIcon icon='angle-up' />
        </Link>
      </>
    );
  }
}

export default ScrollTop;