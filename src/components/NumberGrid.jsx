import classNames from "classnames";
import { sumRow, sumCol, sumDia } from "./../helpers/summers";
import "./NumberGrid.scss"

export default function NumberGrid(props) {
  const { choices } = props;

  const final_cell = 2;
  const grid = [];
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      // create summation cell
      if (row > final_cell || col > final_cell) {
        const classes = classNames("summation")
        
        if (col <= final_cell) {
          const value = sumRow(choices, row);
          console.log("row",value)
          grid.push(<span className={classes}>{value}</span>);
          continue
        }

        if (row <= final_cell) {
          const value = sumCol(choices, col);
          grid.push(<span className={classes}>{value}</span>);
          continue
        }
        
        const value = sumDia(choices);
        grid.push(<span className={classes}>{value}</span>);
        continue
      }

      // create value cell
      const classes = classNames("value")
      const index = row + col * 3
      const value = choices[index]
      grid.push(<span className={classes}>{value}</span> )
    }
  }

  return <div className="result">{grid}</div>;
}
