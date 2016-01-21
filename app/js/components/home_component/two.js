'use strict';
import React from 'react';


var img =
['../assets/images/bg3.jpg',
'../assets/images/bg4.jpg',
'../assets/images/bg5.jpg',
'../assets/images/bg6.jpg',
];

var divStyle = {
  backgroundImage: 'url(' + img[2] + ')',
};

class Two extends React.Component {
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

export default Two;