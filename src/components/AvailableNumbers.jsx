import classNames from "classnames";
import "./AvailableNumbers.scss";

export default function AvailableNumbers(props) {
  const { choices } = props;

  const nums = [];
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }

  const onDragStart = (e, val) => {
    console.log("dragstart:", val)
    e.dataTransfer.setData("val",val)
  };

  return (
    <article className="choices">
      {nums.map((num) => {
        const used = choices.some((e) => e === num);
        const classes = classNames("choice", { used });
        return (
          <section
            key={num}
            draggable
            onDragStart={(e) => onDragStart(e, num)}
            className={classes}
          >
            {num}
          </section>
        );
      })}
    </article>
  );
}
