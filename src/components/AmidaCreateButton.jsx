import React, { Component } from 'react';
import {
  Grid,
  Button,
} from 'semantic-ui-react';

import './../scss/amidaCreateButton.css';

class AmidaCreateButton extends Component {
  constructor(props) {
    super(props)
    this.state = {
      canCreate: false,
      helpWord: ""
    }

    this.handleAmidaOpen = this.handleAmidaOpen.bind(this);
    this.checkCanCreate  = this.checkCanCreate.bind(this);
  }

  componentWillReceiveProps(nextProps) {
    this.checkCanCreate(nextProps);
  }

  checkCanCreate(props) {
    if (props.goals.datas.length == props.participantsCount) {
      this.setState({
        canCreate: true,
      })
      return null;
    } else if (props.goals.datas.length < props.participantsCount) {
      let count = props.participantsCount - props.goals.datas.length;
      this.setState({
        helpWord: `ゴール選択肢をあと${count}入力してください`
      })
      return null;
    }
  }

  handleAmidaOpen() {
    this.props.openAmida();
  }

  render() {
    return(
      <Button
        circular
        size="massive"
        className="create-button primary"
        className={this.state.canCreate ? "create-button primary": "create-button not-create"}
        onClick={this.state.canCreate ? this.props.openAmida : null}
      >
        作成
      </Button>
    );
  }
}

export default AmidaCreateButton;
