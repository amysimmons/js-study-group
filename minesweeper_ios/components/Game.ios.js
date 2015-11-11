import Grid from './Grid.ios.js';
import Score from './Score.ios.js';
import Options from './Options.ios.js';

var React = require('react-native');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
} = React;

let windowWidth = Dimensions.get('window').width;

var Game = React.createClass({

  getInitialState (){
      var boardSize = this.getBoardSize();
      var grid = this.createGridData(boardSize);
      var placeFlag = false;
      var placeFlagColor = '#7F888D';

      return{
        boardSize: boardSize,
        grid: grid,
        placeFlag: placeFlag,
        placeFlagColor: placeFlagColor,
      };
  },

  componentDidMount() {
    var boardSize = this.state.boardSize;
    this.placeMines(boardSize);
  },
  getBoardSize (){
    var boardSize = "S";
    var rows;
    var squares;

    switch (boardSize) {
      case "S":
        rows = 10;
        break;
      case "M":
        rows = 12;
        break;
      case "L":
        rows = 14;
        break;
    }

    squares = rows;

    return {rows: rows, squares: squares};

  },

  createGridData (boardSize){
    var grid = [];
    for(var i = 0; i < boardSize.rows; i++){
      grid.push([]);
      for(var j = 0; j < boardSize.squares; j++){
        grid[i].push(
          {
            row: i,
            col: j,
            selected: false,
            mine: false,
            flagged: false,
            surroundingMines: 0,
            surroundingRevealed: false
          }
        );
      }
    }
    return grid;
  },

  placeMines(boardSize){
    var grid = this.state.grid;
    var numMines = boardSize.squares;
    var min = 0;
    var max = boardSize.squares - 1;

    getRandomInt = function(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    var mineCount = 0;

    while (mineCount < numMines) {
      var randCol = getRandomInt(min, max);
      var randRow = getRandomInt(min, max);
      var cell = grid[randCol][randRow];
      if (!cell.mine){
        cell.mine = true;
        mineCount += 1;
      }
    }
    this.calculateSurroundingMines();
  },
  calculateSurroundingMines(){
    var grid = this.state.grid;
    for (var i = 0; i < grid.length; i++) {
      var row = grid[i];
      for (var j = 0; j < row.length; j++) {
        var cell = row[j];
        var surroundingCells = this.getSurroundingCells(cell);
        for (var k = 0; k < surroundingCells.length; k++) {
          var surroundingCell = surroundingCells[k];
          if (surroundingCell.mine){
            cell.surroundingMines += 1;
          }
        };
      };
    };
    console.log(grid);
  },
  getSurroundingCells(cell){
    var grid = this.state.grid;

    // above cells
    if (cell.row > 0) {
      var cellsAbove = [
        grid[cell.row - 1][cell.col - 1],
        grid[cell.row - 1][cell.col],
        grid[cell.row - 1][cell.col + 1]
      ]
    } else {
      cellsAbove = [];
    }

    // side cells
    var cellsAside = [];
    if (cell.col > 0){
      cellsAside.push(grid[cell.row][cell.col - 1]);
    }
    if (cell.col < grid.length - 1) {
      cellsAside.push(grid[cell.row][cell.col + 1]);
    }

    // cells below
    if (cell.row < grid.length - 1){
      var cellsBelow = [
        grid[cell.row + 1][cell.col - 1],
        grid[cell.row + 1][cell.col],
        grid[cell.row + 1][cell.col + 1]
      ]
    } else {
      cellsBelow = [];
    }

    // calc cells
    var surroundingCells = cellsAbove.concat(cellsAside).concat(cellsBelow);
    surroundingCells = surroundingCells.filter(Boolean);
    return surroundingCells;
  },

  handleFlagPress(){
    var placeFlag = this.state.placeFlag;
    var placeFlagColor = this.state.placeFlagColor;
    if (!placeFlag) {
      placeFlag = true;
      placeFlagColor = '#FF2469'
    }else{
      placeFlag = false;
      placeFlagColor = '#7F888D'
    }
    this.setState({placeFlag: placeFlag, placeFlagColor: placeFlagColor})
  },

  placeFlag(clicked) {
    console.log('placing flag');
    clicked.flagged = true;
  },

  revealCell(clicked){
    console.log('revealing cell')

    if (clicked.mine){
      var result = "You lose!"
      this.gameOver(result);
    }else if (!clicked.selected && !clicked.flagged) {
      clicked.selected = true;
      if(clicked.surroundingMines === 0){
        this.revealSurroundingCells(clicked);
      }
    }
  },

  revealSurroundingCells(clicked) {
    console.log('revealing surrounding cells');
  },

  handleResetPress(){
    console.log('reset press')
  },

  gameOver(result){
    console.log('game over');

  },

  newGame(){
    console.log('new game');
  },

  render () {
    var grid = this.state.grid;
    var boardSize = this.state.boardSize;
    var handleResetPress = this.handleResetPress;
    var handleFlagPress = this.handleFlagPress;
    var placeFlag = this.state.placeFlag;
    var placeFlagColor = this.state.placeFlagColor;
    var handleCellPress = this.handleCellPress;

    return (
      <View style={styles.game}>
        <Score/>
        <Grid grid={grid}
          boardSize={boardSize}
          placeFlag={placeFlag}
          handleCellPress={handleCellPress}/>
        <Options
          handleFlagPress={handleFlagPress}
          handleResetPress={handleResetPress}
          placeFlagColor={placeFlagColor}/>
      </View>
    );
  }


});

var styles = StyleSheet.create({
  game: {
    marginTop: 44 + 20,
    width: windowWidth,
    flex: 1,
  }
});

export default Game;

//grid should have flex direction of column
//row should have a flex direction of row
//cell


