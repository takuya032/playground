import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import {
  Form,
  Grid,
  Button,
  List,
  Input,
  Icon
} from 'semantic-ui-react';

import './../scss/goalInputForm.css'

class GoalInputform extends Component {
  constructor(props) {
    super(props)

    this.state = {
      goals: [],
      textValue: '',
    }

    this.handleOnInput = this.handleOnInput.bind(this);
    this.handleOnSubmit = this.handleOnSubmit.bind(this);
  }

  handleOnInput(e) {
    this.setState({
      textValue: e.target.value,
    })
  }

  handleOnSubmit() {
    if (this.state.textValue) {
      let newGoals = this.props.goals.datas.concat({
        name: this.state.textValue,
        postion: '',
      });
      this.props.addGoal(newGoals);
    } else {
      return null;
    }
  }

  handleClickRemove(index) {
    let newGoals = this.props.goals.datas.filter((goal, i) => {
      return i != index;
    });
    this.props.removeGoal(newGoals);
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
              computer={3}
              tablet={5}
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
              computer={3}
              tablet={5}
            >
              <h4>ゴール選択肢</h4>
              <List
                as="ul"
              >
                {this.props.goals.datas.map((goal, index) => {
                  return(
                    <List.Item
                      as="li"
                      key={index}
                      className="goal-item"
                      id={`goal_${index}`}
                    >
                      {goal.name}
                      <Icon
                        name="remove"
                        size="small"
                        className="remove-button"
                        onClick={this.handleClickRemove.bind(this, index)}
                      />
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
