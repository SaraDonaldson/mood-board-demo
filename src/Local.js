class Local {

  static updateBoard(currentBoard) {
    localStorage.setItem("board", JSON.stringify(currentBoard));
  }

  }

export default Local;
