import React, { Component } from 'react';

import './../scss/amidaTable.css';
import { amidaTableArray, randomGoals } from "./../utils/index";

class AmidaTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomGoals: [],
      amidaTable: [],
    }
  }

  componentWillMount() {
    this.setState({
      amidaTable: amidaTableArray(8),
      randomGoals: randomGoals([{name: 'takuya'}, {name:'yuki'}, {name: 'majide'}]),
    })
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th className="termineitor">なんでや</th>
            <th className="termineitor">なんでや</th>
            <th className="termineitor">なんでや</th>
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
