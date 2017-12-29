import React, { Component } from 'react';
import {
  Grid,
  Button,
} from 'semantic-ui-react';

import './../scss/amidaCreateButton.css'

class AmidaCreateButton extends Component {
  constructor(props) {
    super(props)

    this.handleAmidaOpen = this.handleAmidaOpen.bind(this);
  }

  handleAmidaOpen() {
    this.props.openAmida();
    console.log(this.props.isOpen);
  }

  render() {
    return(
      <Grid
        container
      >
        <Grid.Row
          centered
        >
          <Button
            circular
            size="massive"
            className="create-button"
            primary
            onClick={this.handleAmidaOpen}
          >
            作成
          </Button>
        </Grid.Row>
      </Grid>
    );
  }
}

export default AmidaCreateButton;
