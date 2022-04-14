const sumRow = (choices, rowNum) => {
  let acc = 0;
  for (let i = 0; i < 3; i++) {
    const index = rowNum * 3 + i;
    acc += choices[index];
  }
  return acc;
};

const sumCol = (choices, colNum) => {
  let acc = 0;
  for (let i = 0; i < 3; i++) {
    const index = i * 3 + colNum;
    acc += choices[index];
  }
  return acc;
};

const sumDia = (choices) => {
  let acc = 0;
  for (let i = 0; i < 3; i++) {
    const index = i * 3 + i;
    acc += choices[index];
  }
  return acc;
};

module.exports = { sumRow, sumCol, sumDia };
