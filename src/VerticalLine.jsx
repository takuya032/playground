import React, { Component } from 'react';
import {
  Grid,
} from 'semantic-ui-react';
import './scss/verticalLine.css'

class VerticalLine extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verticalLines: [
        {id: 1, name: 'taku'},
        {id: 2, name: 'tsubo'},
        {id: 3, name: 'yagyu'},
      ],
    };
  }

  render() {
    return (
      <div>
        {this.state.verticalLines.map(verticalLine => {
          return(
            <div>
              hoge
            </div>
          );
        })}
      </div>
    );
  }
}

export default VerticalLine;
