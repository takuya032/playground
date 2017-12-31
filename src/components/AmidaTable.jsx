import React, { Component } from 'react';

import {
  Input,
  Button
} from 'semantic-ui-react';
import './../scss/amidaTable.css';
import { amidaTableArray, randomGoals } from "./../utils/index";

class AmidaTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      participants: [],
      randomGoals: [],
      amidaTable: [],
    }

    this.handleNameSave = this.handleNameSave.bind(this);
  }

  componentWillMount() {
    this.setState({
      participants: this.props.participants.datas,
      amidaTable: amidaTableArray(5),
      randomGoals: randomGoals(this.props.goals.datas),
    })
  }

  handleGo(pi, e) {
    let name = e.target.previousElementSibling.value
    this.handleNameSave(pi, name);
  }

  handleNameSave(index, name) {
    let participants = this.props.participants.datas;
    name = name ? name : `P_${index + 1}`
    participants[index].name = name;
    this.props.changeParticipant(participants);
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
                    onClick={this.handleGo.bind(this, pi)}
                  >
                    Go
                  </button>
                </th>
              );
            })}
          </tr>
        </thead>
        <tbody>
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
