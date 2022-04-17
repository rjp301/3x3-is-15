import classNames from "classnames";
import { sumRow, sumCol, sumDia } from "./../helpers/summers";
import "./NumberGrid.scss";

export default function NumberGrid(props) {
  const { choices, setChoices } = props;

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

  const setChoiceByIndex = (val, index) => {
    const choiceCopy = [...choices];
    choiceCopy[index] = val;
    setChoices(choiceCopy);
  };

  return (
    <div className="result">
      <article id="grid">
        {choices.map((choice, index) => {
          const empty = choice === 0;
          const classes = classNames("choice", { empty });

          return (
            <section
              className={classes}
              key={index}
              draggable={!empty}
              onDragStart={(e) => {
                e.dataTransfer.setData("val", choice);
              }}
              onDragEnd={(e) => {
                setChoiceByIndex(0, index);
              }}
              onDragOver={onDragOver}
              onDrop={(e) => {
                const val = Number(e.dataTransfer.getData("val"));
                setChoiceByIndex(val, index);
              }}
            >
              {choice}
            </section>
          );
        })}
      </article>
      <article id="sum-row">
        {[0, 1, 2].map((index) => {
          const sum = sumRow(choices, index);
          const classes = classNames("summation", {
            high: sum > 15,
            low: sum < 15,
            correct: sum === 15,
          });
          return (
            <section key={index} className={classes}>
              {sum}
            </section>
          );
        })}
      </article>
      <article id="sum-col">
        {[0, 1, 2].map((index) => {
          const sum = sumCol(choices, index);
          const classes = classNames("summation", {
            high: sum > 15,
            low: sum < 15,
            correct: sum === 15,
          });
          return (
            <section key={index} className={classes}>
              {sum}
            </section>
          );
        })}
      </article>
      <article id="sum-dia">
        {[0].map((index) => {
          const sum = sumDia(choices, index);
          const classes = classNames("summation", {
            high: sum > 15,
            low: sum < 15,
            correct: sum === 15,
          });
          return (
            <section key={index} className={classes}>
              {sum}
            </section>
          );
        })}
      </article>
    </div>
  );
}
