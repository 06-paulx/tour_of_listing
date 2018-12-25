import React from 'react';
import ReactDOM from 'react-dom';
import CategoryPhoto from './components/CategoryPhoto.jsx';
import _ from 'lodash';
import ViewAllRooms from './components/ViewAllRooms.jsx';

const headerStyle = {
  'marginBotton': '32px',
  color: '#484848',
  'fontFamiliy': 'Sans-Serif'
};

const photoContainer = {
  'display': 'flex',
  'flexDirection': 'row',
  'flexWrap': 'wrap',
}

const button = {
  'backgroundColor': 'transparent',
  'border': '0px',
  'textAlign': 'left',
  'fontFamily': 'Sans-Serif',
  'color': '#A61D55',
  'fontSize': '14px'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      photos: {},
      view: 'main'
    };
    this.changeToViewAllRooms = this.changeToViewAllRooms.bind(this);
    this.changeViewToMain = this.changeViewToMain.bind(this);
  }

  retrievePhotos() {
    fetch('/listingphotos')
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

  componentDidMount() {
    this.retrievePhotos();
  }

  render() {
    if (this.state.view === 'main'){
      return (
        <div className="mainContainer">
          <div className="header" style={headerStyle}>
            <h1>Tour This Home</h1>
          </div>
          <div className="photosContainer">
            <div style={photoContainer}>
            {_.map(this.state.photos, function(value) {
              return <CategoryPhoto photos={value} />
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
          <ViewAllRooms photos={this.state.photos} changeViewToMain={this.changeViewToMain}/>
        </div>
      );
    }
  }
};

ReactDOM.render(<App />, document.getElementById('tourOfListing'));  

export default App;