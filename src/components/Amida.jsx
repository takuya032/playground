import React, { Component } from 'react';

import {
  Grid,
} from 'semantic-ui-react';

import AmidaCreateButton from './AmidaCreateButton';
import AmidaTable from './AmidaTable';

class Amida extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <Grid
        container
      >
        <Grid.Row
          centered
        >
          <AmidaCreateButton
            {...this.props}
          />
        </Grid.Row>
        <Grid.Row
          centered
        >
          <AmidaTable
            {...this.props}
          />
        </Grid.Row>
      </Grid>
    );
  }
}

export default Amida;
