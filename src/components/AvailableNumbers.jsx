import classNames from "classnames";
import "./AvailableNumbers.scss"

export default function AvailableNumbers(props) {
  const { choices } = props;

  const nums = [];
  for (let i = 1; i <= 9; i++) {
    const used = choices.some((e) => e === i);
    const classes = classNames("choice", { used });
    nums.push(<span className={classes}>{i}</span>);
  }

  return <div className="choices">{nums}</div>;
}
