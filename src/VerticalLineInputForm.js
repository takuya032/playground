import React, { Component } from 'react';
import {
  Icon
} from 'semantic-ui-react';

/*css*/
import './scss/verticalLineInputForm.css'

const clickStyle = {
  cursor: 'pointer',
}

const FINAL_COUNT = 10;
const LAST_COUNT = 3;

class VerticalLineInputForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      verticalLineCount: 5,
    };
    this.handleOnClickUpOrDown = this.handleOnClickUpOrDown.bind(this);
  }

  handleOnClickUpOrDown(count, calculation) {
    switch (calculation) {
      case "+":
        count++;
        break;
      case "-":
        count--;
        break;
    }
    this.setState({
      verticalLineCount: count,
    });
  }

  render() {
    return (
      <div
        className="input-group"
      >
        参加人数
        <Icon
          name="triangle down"
          size="large"
          onClick={() => {
            this.handleOnClickUpOrDown(this.state.verticalLineCount, "-");
          }}
          style={clickStyle}
        />
          {this.state.verticalLineCount}
        <Icon
          name="triangle up"
          size="large"
          onClick={() => {
            this.handleOnClickUpOrDown(this.state.verticalLineCount, "+");
          }}
          style={clickStyle}
        />
      </div>
    );
  }
}

export default VerticalLineInputForm;
