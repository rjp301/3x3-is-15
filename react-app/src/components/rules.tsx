import React from "react";

const Rules: React.FC = () => {
  return (
    <details className="w-full">
      <summary>How to play</summary>
      <ol className="list-decimal text-xs ml-4 flex flex-col gap-1">
        <li>Drag the numbers 1 through 9 onto the board</li>
        <li>Try to arrange them such that each axis sums to 15</li>
        <li>It is possible! Don't give up</li>
      </ol>
    </details>
  );
};

export default Rules;
