import React, { Component } from 'react';

import './../scss/amidaTable.css';
import { amidaTableArray } from "./../utils/index";

class AmidaTable extends Component {
  constructor(props) {
    super(props)

    this.state = {
      randomGoals: [],
      amidaTable: [[false, false, true], [true, false, false], [false, true, false]]
    }
  }

  componentWillMount() {
    this.setState({
      amidaTable: amidaTableArray(3),
    })
  }

  render() {
    return(
      <table>
        <thead>
          <tr>
            <th>なんでや</th>
            <th>なんでや</th>
            <th>なんでや</th>
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
            <th>なんでや</th>
            <th>なんでや</th>
            <th>なんでや</th>
          </tr>
        </tfoot>
      </table>
    )
  }
}

export default AmidaTable;
