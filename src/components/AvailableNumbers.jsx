import classNames from "classnames";
import "./AvailableNumbers.scss";

export default function AvailableNumbers(props) {
  const { choices } = props;

  const nums = [];
  for (let i = 1; i <= 9; i++) {
    nums.push(i);
  }

  return (
    <div className="choices-container">
      <article className="choices">
        {nums.map((num) => {
          const used = choices.includes(num);
          const classes = classNames("choice", { used });
          return (
            <section
              key={num}
              draggable={!used}
              onDragStart={(e) => e.dataTransfer.setData("val", num)}
              className={classes}
            >
              {num}
            </section>
          );
        })}
      </article>
    </div>
  );
}
