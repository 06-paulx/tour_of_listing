import React from 'react';
import ReactDOM from 'react-dom';
import CategoryPhoto from './components/CategoryPhoto.jsx';
import _ from 'lodash';
import ViewAllRooms from './components/ViewAllRooms.jsx';
import TourThisHome from './components/TourThisHome.jsx';


class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: {},
      view: 'main',
    };
    this.changeToViewAllRooms = this.changeToViewAllRooms.bind(this);
    this.changeViewToMain = this.changeViewToMain.bind(this);
    this.changeToTourThisHome = this.changeToTourThisHome.bind(this);
  }

  retrievePhotos() {
    var listingId = window.location.pathname.slice(1);
    console.log('listingId is ======= ', listingId);
    fetch(`http://localhost:3004/${listingId}/listingphotos`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json'
      }
    })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        this.setState({
          photos: data,
        });
      });
  }

  changeToViewAllRooms() {
    this.setState({
      view: 'viewAllRooms',
    })
  }

  changeViewToMain() {
    this.setState({
      view: 'main',
    })
  }

  changeToTourThisHome() {
    this.setState({
      view: 'tourThisHome',
    })
  }

  componentDidMount() {
    console.log('component mounted ', this.state.listingId);
    this.retrievePhotos();
  }

  render() {
    const headerStyle = {
      'marginBotton': '36px',
      'color': '#484848',
      'font': 'system-ui'
      
    };
    
    const photoContainer = {
      'display': 'flex',
      'flexDirection': 'row',
      'flexWrap': 'wrap',
      'marginBottom': '30px',
    }
    
    const button = {
      'backgroundColor': 'transparent',
      'border': '0px',
      'textAlign': 'left',
      'fontFamily': 'Sans-Serif',
      'color': '#A61D55',
      'fontSize': '14px'
    }

    if (this.state.view === 'main'){
      const some = this;
      return (
        <div className="mainContainer">
          <div className="header" style={headerStyle}>
            <h1>Tour this house</h1>
          </div>
          <div className="photosContainer">
            <div style={photoContainer}>
            {_.map(this.state.photos, function(value) {
              return <CategoryPhoto photos={value} changeToTourThisHome={some.changeToTourThisHome}/>
            })}
            </div>
          </div>
          <div className="exploreMore">
            <button style={button} onClick={this.changeToViewAllRooms}>Explore all # photos</button>
          </div>
      </div>
      );
    } else if (this.state.view === 'viewAllRooms') {
      return (
        <div>
          <ViewAllRooms 
          photos={this.state.photos} 
          changeViewToMain={this.changeViewToMain}
          changeToTourThisHome={this.changeToTourThisHome} />
        </div>
      );
    } else if (this.state.view === 'tourThisHome') {
      return (
        <div>
          <TourThisHome photos={this.state.photos} changeViewToMain={this.changeViewToMain}/>
        </div>
      )
    }
  }
};


ReactDOM.render(<App />, document.getElementById('tourOfListing'));  

export default App;