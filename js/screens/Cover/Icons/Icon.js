import React, { Component } from 'react';

class Icon extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    let iconName = '',
        iconSvg  = '';
    switch (this.props.icon) {
      case 'logo':
        iconName = 'logo';
        iconSvg = require('./logo.svg');
        break;
    }
    return (
      <div className={`icon icon-${iconName}`} dangerouslySetInnerHTML={{__html: iconSvg}} />
    );
  }
}

export default Icon;
