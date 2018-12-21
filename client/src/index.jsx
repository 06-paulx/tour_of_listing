import React from 'react';
import ReactDOM from 'react-dom';
import CategoryPhoto from './components/CategoryPhoto.jsx';

const headerStyle = {
  'marginBotton': '32px',
  color: '#484848',
  'fontFamiliy': 'Sans-Serif'
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="header" style={headerStyle}>
          <h1>Tour This Home</h1>
        </div>
        <div className="photos">
        <CategoryPhoto />
        </div>
        <div className="exploreMore">The button to explor more photos</div>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('tourOfListing'));  