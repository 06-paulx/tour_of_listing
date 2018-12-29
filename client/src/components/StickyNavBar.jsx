import React from 'react';

class StickyNavBar extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      scroll: 0,
    }
    this.handleScroll = this.handleScroll.bind(this);
    this.backArrow = <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fill-rule="evenodd"></path>
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
    const bar = {
      'height': '50px',
      'backgroundColor': 'white',
      'borderBottom': '1px solid gray',

    }
    const backArrow = {
      'height': '22px',
      'width': '22px',
      'display': 'block', 
      'fill': 'rgb(72, 72, 72)'
    }
    const button = {
      'backgroundColor': 'transparent',
      'border': '0px',
      'width': '20px',
      'align': 'left',
      'marginRight': '50px',
    }
    const tourhomebutton = {
      'backGroundColor': 'transparent',
      'borderColor': 'rgb (72, 72, 72)',
      'borderRadius': '4px',
      'borderStyle': 'solid',
      'borderWidth': '1px',
    }
    if (this.props.view === 'viewAllRooms') {
      return (
        <nav style={fixedNav}>
        <div style={bar}>
          <button onClick={this.props.changeViewToMain} style={button}>
           <svg viewBox="0 0 18 18" role="img" aria-label="Close" focusable="false" style={backArrow}>
             <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path>
           </svg>
          </button>
          <button style={tourhomebutton} onClick={this.props.changeToTourThisHome}>Tour this homes</button>
        </div>
      </nav>
      )
    } else if (this.props.view ==='tourThisHome') {
        return(
          <nav style={fixedNav}>
            <div style={bar}>
              <button onClick={this.props.changeViewToMain} style={button}>
              <svg viewBox="0 0 18 18" role="img" aria-label="Close" focusable="false" style={backArrow}>
               <path d="m13.7 16.29a1 1 0 1 1 -1.42 1.41l-8-8a1 1 0 0 1 0-1.41l8-8a1 1 0 1 1 1.42 1.41l-7.29 7.29z" fillRule="evenodd"></path>
              </svg>
              </button>
              <button style={tourhomebutton} onClick={this.props.changeToViewAllRooms}>View All Rooms</button>
            </div>
          </nav>
        )
      }
  }
}

export default StickyNavBar;