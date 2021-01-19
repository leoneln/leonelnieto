import React from 'react';
import { Link } from 'react-scroll';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

class ScrollTop extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      prevScrollpos: window.pageXOffset,
      visible: false
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }
  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  handleScroll = () => {
    //const { prevScrollpos } = this.state;
    const currentScrollPos = window.pageXOffset;
    //const visible = prevScrollpos < currentScrollPos;

    this.setState({
      prevScrollpos: currentScrollPos,
      visible: true
    })
  }

  render() {
    if (this.state.visible) {
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
    } else {
      return (
        <></>
      )
    }
  }
}

export default ScrollTop;