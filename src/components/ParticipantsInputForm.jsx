import React, { Component } from 'react';
import {
  Icon
} from 'semantic-ui-react';

/*css*/
import './../scss/verticalLineInputForm.css'

const clickStyle = {
  cursor: 'pointer',
}

const FINAL_COUNT = 10;
const LAST_COUNT = 3;

class ParticipantsInputForm extends Component {
  constructor(props) {
    super(props);

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
    this.props.participantsChangeCount(count);
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
            this.handleOnClickUpOrDown(this.props.participantsCount, "-");
          }}
          style={clickStyle}
        />
          {this.props.participantsCount}
        <Icon
          name="triangle up"
          size="large"
          onClick={() => {
            this.handleOnClickUpOrDown(this.props.participantsCount, "+");
          }}
          style={clickStyle}
        />
      </div>
    );
  }
}

export default ParticipantsInputForm;
