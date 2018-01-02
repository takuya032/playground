import React, { Component } from 'react';

import {
  Input,
  Button
} from 'semantic-ui-react';
import './../scss/amidaTable.css';
import {
  amidaTableArray,
  randomGoals,
  setParticipantsGoal,
  passageToGoal,
  changeRed,
  removeAllRed,
} from "./../utils/index";

class AmidaTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      participants: [],
      randomGoals: [],
      amidaTable: [],
      participantsPassage: [],
    }

    this.handleNameSave  = this.handleNameSave.bind(this);
    this.handleChangeRed = this.handleChangeRed.bind(this);
    this.handleOpenGoal  = this.handleOpenGoal.bind(this);
  }

  componentWillMount() {
    this.setState({
      participants: this.props.participants.datas,
      amidaTable: amidaTableArray(this.props.participants.participantsCount),
      randomGoals: randomGoals(this.props.goals.datas),
    })

  }

  componentDidMount() {
    let allPassage = []
    let participants = this.props.participants.datas;
    for(let i=0; i < this.props.participants.participantsCount; i ++) {
      let passage = passageToGoal(this.state.amidaTable, i);
      participants[i].goal = passage[passage.length-1];
      allPassage.push(passage);
    }
    this.props.changeParticipant(participants);
    this.setState({
      participantsPassage: allPassage,
    })
  }

  handleGo(index, e) {
    this.handleNameSave(index, e)
    this.handleChangeRed(index)
    this.handleOpenGoal(index)
  }

  handleNameSave(index, e) {
    let name = e.target.previousElementSibling.value
    let participants = this.props.participants.datas;
    name = name ? name : `P_${index + 1}`
    participants[index].name = name;
    this.props.changeParticipant(participants);
  }

  handleChangeRed(index) {
    removeAllRed();
    changeRed(this.state.participantsPassage[index]);
  }

  handleOpenGoal(index) {
    let openGoal = this.props.participants.datas[index].goal;
    let goals = this.props.goals.datas;
    goals[openGoal].isOpen = true;
    this.props.openGoal(goals);
  }

  render() {
    return(
      <table
        className="amida-table"
      >
        <thead>
          <tr>
            {this.state.participants.map((participant, pi) =>{
              return(
                <th
                  className="termineitor th-block"
                  key={pi}
                >
                  <input
                    className="name-input"
                  />
                  <button
                    type="submit"
                    onClick={
                      this.handleGo.bind(this, pi)
                    }
                  >
                    Go
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody
          id="amida_lines"
        >
          {this.state.amidaTable.map((line, li) => {
            return(
              <tr
                key={li}
              >
                {line.map((column, ci) => {
                  return(
                    <td
                      className={column ? "vertical-line bottom-line" : "vertical-line"}
                      key={ci}
                    >
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        <tfoot>
          <tr>
            {this.state.randomGoals.map((goal, index) => {
              return(
                <th
                  className="termineitor"
                  key={index}
                >
                  {goal.isOpen ? goal.name: null}
                </th>
              );
            })}
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default AmidaTable;
