'use strict';
import React from 'react';



var divStyle = {
  backgroundImage: 'url(../assets/images/bg6.jpg)',
};

class Four extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div className="homepage">

        <div id='homeleft' style={divStyle}></div>
        
      </div>
    );
  }
}

export default Four;