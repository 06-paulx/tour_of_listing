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
      'borderColor': 'lightgray',
      'borderRadius': '4px',
      'borderStyle': 'solid',
      'borderWidth': '1px',
      'paddingTop': '6px',
      'paddingBottom': '6px',
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
      'fontFamily': 'circular, Helvetica, Arial, sans-serif',
      'display': 'table-cell',
      'verticalAlign': 'middle',
      'fontSize': '14px',
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
              <span>
                <button style={tourhomebutton} onClick={this.props.changeToViewAllRooms}>
                  <div style={tourhomebuttontop} style={tableCell}>
                    <div style={marginRight}>
                      <svg style={svg3by3}>
                      <path d="M3 7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm12.75 0a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75zm-10.5-6A.75.75 0 0 1 6 .75h9a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75zm10.5 12a.75.75 0 0 1-.75.75H6a.75.75 0 0 1 0-1.5h9a.75.75 0 0 1 .75.75zM3 1.5a1.5 1.5 0 1 1-2.999.001A1.5 1.5 0 0 1 3 1.5zm0 12a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"></path>
                      </svg>
                    </div>
                  </div>
                <div style={tourhomebuttontop} style={tableCell}>View all rooms</div>
                </button>
          </span>
            </div>
          </nav>
        )
      }
  }
}

export default StickyNavBar;