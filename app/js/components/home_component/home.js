'use strict';
import React from 'react';


var img =
['../assets/images/bg3.jpg',
'../assets/images/bg4.jpg',
'../assets/images/bg5.jpg',
'../assets/images/bg6.jpg',
];

var divStyle = {
  backgroundImage: 'url(' + img[0] + ')',
};

class Home extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <div>
        <div id="axis" className="one ">
          <img className="object dialog" src="../assets/images/Twitter/dialog.png"/>
          <img className="object laba" src="../assets/images/Twitter/laba.jpg"/>
          <img className="object van move-right" src="../assets/images/van-to-right.png"/>
          <img className="object folder" src="../assets/images/Twitter/folder.png"/>
          <img className="object arrow" src="../assets/images/Twitter/arrow.jpeg"/>
        </div>
      </div>
    );
  }
}

export default Home;