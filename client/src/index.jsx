import React from 'react';
import ReactDOM from 'react-dom';
import CategoryPhoto from './components/CategoryPhoto.jsx';
import _ from 'lodash';

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
    this.changeView = this.changeView.bind(this);
  }

  retrievePhotos() {
    fetch('/listingphotos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Data from Fetch ', data);
        console.log('The type of data is ', typeof data);
        this.setState({
          photos: data,
        });
      });
  }

  changeView() {
    this.setState({
      view: 'viewAllRooms',
    })
  }

  componentDidMount() {
    this.retrievePhotos();
  }

  render() {
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
          <button style={button}>Explore all # photos</button>
        </div>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('tourOfListing'));  

export default App;