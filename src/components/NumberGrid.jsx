import classNames from "classnames";
import { sumRow, sumCol, sumDia } from "./../helpers/summers";
import "./NumberGrid.scss";

export default function NumberGrid(props) {
  const { choices } = props;

  // const cells = 3;
  // const nums = [];
  // for (let i = 0; i < (cells + 1) * (cells + 1); i++) {
  //   nums.push(i);
  // }

  // const final_cell = 2;
  // const grid = [];
  // for (let row = 0; row < 4; row++) {
  //   for (let col = 0; col < 4; col++) {
  //     // create summation cell
  //     if (row > final_cell || col > final_cell) {
  //       const classes = classNames("summation")

  //       if (col <= final_cell) {
  //         const value = sumRow(choices, row);
  //         console.log("row",value)
  //         grid.push(<span className={classes}>{value}</span>);
  //         continue
  //       }

  //       if (row <= final_cell) {
  //         const value = sumCol(choices, col);
  //         grid.push(<span className={classes}>{value}</span>);
  //         continue
  //       }

  //       const value = sumDia(choices);
  //       grid.push(<span className={classes}>{value}</span>);
  //       continue
  //     }

  //     // create value cell
  //     const classes = classNames("value")
  //     const index = row + col * 3
  //     const value = choices[index]
  //     grid.push(<span className={classes}>{value}</span> )
  //   }
  // }

  const onDragOver = (e) => {
    e.preventDefault();
  };

  const onDrop = (e, index) => {
    const val = e.dataTransfer.getData("val")
    console.log("drop");
  };

  return (
    <article className="result">
      {/* <section>{choices[0]}</section>
      <section>{choices[1]}</section>
      <section>{choices[2]}</section>
      <section className="summation">{sumRow(choices, 0)}</section>
      <section>{choices[3]}</section>
      <section>{choices[4]}</section>
      <section>{choices[5]}</section>
      <section className="summation">{sumRow(choices, 1)}</section>
      <section>{choices[6]}</section>
      <section>{choices[7]}</section>
      <section>{choices[8]}</section>
      <section className="summation">{sumRow(choices, 2)}</section>
      <section className="summation">{sumCol(choices, 0)}</section>
      <section className="summation">{sumCol(choices, 1)}</section>
      <section className="summation">{sumCol(choices, 2)}</section>
      <section className="summation">{sumDia(choices)}</section> */}

      {choices.map((choice, index) => (
        <section
          className="draggable"
          key={index}
          onDragOver={onDragOver}
          onDrop={(e) => onDrop(e, index)}
        >
          {choice}
        </section>
      ))}
    </article>
  );
}
