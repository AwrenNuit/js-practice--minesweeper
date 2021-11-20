export const annotate = (input) => {
  let board = {};

  // set board values
  if (input.length > 0 && input.indexOf('') === -1) {
    for (let i = 0; i < input.length; i++) {
      for (let j = 0; j < input.length; j++) {
        if (!board[`row${i}`]) board[`row${i}`] = {};
        board[`row${i}`][`col${j}`] = input[i][j];
      }
    }

    // increment spaces adjacent to mines

    // put board back together

    return board;
  } else {
    return input;
  }
};
