import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className="mainContainer">
        <div className="header">Tour this House</div>
        <div className="photos">This is where the photos go</div>
        <div className="exploreMore">The button to explor more photos</div>
    </div>
    );
  }
};

ReactDOM.render(<App />, document.getElementById('tourOfListing'));  