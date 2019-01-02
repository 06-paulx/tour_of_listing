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
      'left': '24px',
      'marginRight': '50px',
      'marginTop': '10px',
      'marginBottom': '10px',
      'zIndex': '1',
    }
    const tourhomebuttontop = {
      'display': 'tableCell',
      'verticalAlign': 'middle',
    }

    const tourhomebuttonsides = {
      'paddingRight': '24px', 
      'paddingLeft': '24px' 
    }

    const tourhomebutton = {
      'backGroundColor': 'transparent',
      'borderColor': 'rgb (228, 228, 228)',
      'borderRadius': '4px',
      'borderStyle': 'solid',
      'borderWidth': '1px',
    }
    const marginRight = {
      'marginRight': '12px',
    }
    const svg3by3 = {
      'height': '18px',
      'width': '18px',
      'display': 'block',
      'fill': 'currentcolor',
    }

    const marginZero = {
      'display': 'table',
      'margin': '0px auto',
    }

    const tableCell = {
      'display': 'table-cell',
      'verticalAlign': 'middle',
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
          <span>
            <button style={tourhomebutton} onClick={this.props.changeToTourThisHome}>
              <div style={tourhomebuttontop} style={tableCell}>
                <div style={marginRight}>
                  <svg style={svg3by3}>
                    <circle cx="1.5" cy="1.5" r="1.5"></circle>
                    <circle cx="1.5" cy="8.5" r="1.5"></circle>
                    <circle cx="8.5" cy="1.5" r="1.5"></circle>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <circle cx="15.5" cy="1.5" r="1.5"></circle>
                    <circle cx="15.5" cy="8.5" r="1.5"></circle>
                    <circle cx="1.5" cy="15.5" r="1.5"></circle>
                    <circle cx="8.5" cy="15.5" r="1.5"></circle>
                    <circle cx="15.5" cy="15.5" r="1.5"></circle>
                  </svg>
                </div>
              </div>
            <div style={tourhomebuttontop} style={tableCell}>Tour this home</div>
            </button>
          </span>
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