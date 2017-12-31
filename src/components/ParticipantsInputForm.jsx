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
    this.addedParticipant = this.addedParticipant.bind(this);
    this.removedParticipant = this.removedParticipant.bind(this);
  }

  handleOnClickUpOrDown(count, calculation) {
    switch (calculation) {
      case "+":
        count++;
        this.props.addParticipant(this.addedParticipant());
        break;
      case "-":
        count--;
        this.props.removeParticipant(this.removedParticipant());
        break;
    }
    this.props.participantsChangeCount(count);
  }

  addedParticipant() {
    let newParticipants = this.props.participants.datas.concat(
      this.props.participants.target
    );
    return newParticipants;
  }

  removedParticipant() {
    let newParticipants = this.props.participants.datas.filter((participant, i, arr) => {
      return i < arr.length - 1
    });
    return newParticipants
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
