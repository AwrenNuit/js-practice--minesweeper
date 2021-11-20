export const annotate = (input) => {
  let board = {};
  let mineCoordinates = [];
  let output = [];

  function incrementAdjacentSpaces(row, col) {
    if (board[`row${row}`]) {
      if (board[`row${row}`][`col${col - 1}`] && board[`row${row}`][`col${col - 1}`] !== '*') board[`row${row}`][`col${col - 1}`]++;
      if (board[`row${row}`][`col${col}`] && board[`row${row}`][`col${col}`] !== '*') board[`row${row}`][`col${col}`]++;
      if (board[`row${row}`][`col${col + 1}`] && board[`row${row}`][`col${col + 1}`] !== '*') board[`row${row}`][`col${col + 1}`]++;
    }
  }

  function findAdjacentSpaces() {
    for (const mine of mineCoordinates) {
      const row = mine[0];
      const col = mine[1];

      incrementAdjacentSpaces(row - 1, col);
      incrementAdjacentSpaces(row, col);
      incrementAdjacentSpaces(row + 1, col);
    }
  }

  function formatBoardForOutput() {
    for (const row of Object.values(board)) {
      let thisRow = '';
      for (const col of Object.values(row)) {
        thisRow += `${col}`;
      }
      output.push(thisRow);
    }
  }

  function setBoardValues() {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === '*') mineCoordinates.push([i, j]);
        if (!board[`row${i}`]) board[`row${i}`] = {};
        board[`row${i}`][`col${j}`] = input[i][j];
      }
    }
  }

  if (input.length > 0 && input.indexOf('') === -1) {
    setBoardValues();
    findAdjacentSpaces();
    formatBoardForOutput();

    return output;
  } else {
    return input;
  }
};
