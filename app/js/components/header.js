'use strict';
import React from 'react';


class Header extends React.Component {
  constructor() {
    super();
   }
  render() {
    return (
      <div>
        <div className ='bigheader' >
        <div className ='contactHeader'>
          <div className='contactHeaderContainer'>
            <span className='fa fa-home'> 853 Commodore Dr</span>
            <span className='fa fa-phone'> (773) 969-2089</span>
          </div>
        </div>
        </div>
      </div>
    )
  }
}

export default Header;
