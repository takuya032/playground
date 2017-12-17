import React, { Component } from 'react';
import {
  Form,
  Grid,
  Button,
  List,
  Input
} from 'semantic-ui-react';

import './scss/goalInputForm.css'

class GoalInputform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: [],
      textValue: '',
      dropId: '',
    }

    this.handleOnInput = this.handleOnInput.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
    this.handleMouseOverDisplayRemoveButton = this.handleMouseOverDisplayRemoveButton.bind(this);
  }

  handleOnInput(e) {
    this.setState({
      textValue: e.target.value,
    })
  }

  handleOnSubmit() {
    if (this.state.textValue) {
      this.setState({
        goals: this.state.goals.concat([this.state.textValue])
      })
    } else {
      return null;
    }
  }

  handleMouseOverDisplayRemoveButton() {

  }

  render() {
    return(
      <div>
        <Grid
          container
        >
          <Grid.Row
            centered
          >
            <Grid.Column
              width={7}
            >
              <Form
                reply
                onSubmit={(e) => {
                  e.preventDefault();
                  this.handleOnSubmit();
                }}
              >
                <Form.TextArea
                  onChange={this.handleOnInput}
                />
                <Button content='追加' floated="right" icon='edit' primary />
              </Form>
            </Grid.Column>
            <Grid.Column
              width={7}
            >
              <h4>ゴール選択肢</h4>
              <List
                as="ul"
              >
                {this.state.goals.map((goal, index) => {
                  return(
                    <List.Item
                      as="li"
                      key={index}
                      className="goal-item"
                      id={`goal_${index}`}
                      onMouseOver={this.handleMouseOverDropGoal}
                    >
                      {goal}
                    </List.Item>
                  );
                })}
              </List>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default GoalInputform;
