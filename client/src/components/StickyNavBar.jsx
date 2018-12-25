import React from 'react';

class StickyNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
  }

  handleScroll() {
    this.setState({
      sroll: window.scrollY
    });
  }

  render() {
    const fixedNav = {
      'position': 'fixed',
      'top': '0',
      'width': '100%',
    }
    return(
      <nav style={fixedNav}>
        <span>
          <button onClick={this.props.changeViewToMain}>back</button>
        </span>
        <span>
          <button>Tour this House</button>
        </span>
      </nav>
    )
  }
}

export default StickyNavBar;