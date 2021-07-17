import React, { Component } from 'react';
import style from './style.css';
class DrawGrid extends Component {
  handleClick = (seat) => {
    const { onClickData } = this.props;
    onClickData(seat);
    // for (let i = 0; i < el.length; i += 1) {}
  };
  render() {
    const { seat, reserved } = this.props;
    return (
      <table className="seat-system-table">
        <tbody>
          <tr>
            {seat.map((row) => (
              <td
                className={
                  reserved.indexOf(row) > -1
                    ? 'seat-system-td reserved'
                    : 'seat-system-td available'
                }
                key={row}
                onClick={(e) => this.handleClick(row)}
                role="presentation"
              >
                {row}
              </td>
            ))}
          </tr>
        </tbody>
      </table>
    );
  }
}
export default DrawGrid;
