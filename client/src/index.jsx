import React from 'react';
import ReactDOM from 'react-dom';
import CategoryPhoto from './components/CategoryPhoto.jsx';

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  retrievePhotos() {
    fetch('/listingphotos')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log('Data from Fetch ', data[0].photourl);
        console.log('The type of data is ', typeof data);
        //Can now set state with this.
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
          <CategoryPhoto />
          <CategoryPhoto />
          <CategoryPhoto />
          <CategoryPhoto />
          </div>
        </div>
        <div className="exploreMore">The button to explore more photos</div>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('tourOfListing'));  

export default App;