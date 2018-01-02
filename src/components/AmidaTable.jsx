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

    this.handleNameSave = this.handleNameSave.bind(this);
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
    for(let i=0; i < this.props.participants.participantsCount; i ++) {
      allPassage.push(passageToGoal(this.state.amidaTable, i));
    }
    this.setState({
      participantsPassage: allPassage,
    })
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
                      this.handleNameSave.bind(this, pi),
                      this.handleChangeRed.bind(this, pi)
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
                      // className={column ? "vertical-red-line bottom-red-line" : "vertical-red-line"}
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
                  {goal.name}
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
