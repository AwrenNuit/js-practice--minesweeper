export const annotate = (input) => {
  let board = {};
  let mineCoordinates = [];

  function incrementColumns(row, col) {
    if (board[`row${row}`]) {
      if (board[`row${row}`][`col${col - 1}`] && board[`row${row}`][`col${col - 1}`] !== '*') board[`row${row}`][`col${col - 1}`]++;
      if (board[`row${row}`][`col${col}`] && board[`row${row}`][`col${col}`] !== '*') board[`row${row}`][`col${col}`]++;
      if (board[`row${row}`][`col${col + 1}`] && board[`row${row}`][`col${col + 1}`] !== '*') board[`row${row}`][`col${col + 1}`]++;
    }
  }

  // set board values
  if (input.length > 0 && input.indexOf('') === -1) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input[i].length; j++) {
        if (input[i][j] === '*') mineCoordinates.push([i, j]);
        if (!board[`row${i}`]) board[`row${i}`] = {};
        board[`row${i}`][`col${j}`] = input[i][j];
      }
    }

    // increment spaces adjacent to mines
    for (const mine of mineCoordinates) {
      const row = mine[0];
      const col = mine[1];

      incrementColumns(row - 1, col);
      incrementColumns(row, col);
      incrementColumns(row + 1, col);
    }

    // put board back together

    return board;
  } else {
    return input;
  }
};
