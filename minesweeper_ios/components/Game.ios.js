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

      return{
        boardSize: boardSize,
        grid: grid
      };
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
        grid[i].push('empty');
      }
    }
    return grid;
  },

  render () {
    var grid = this.state.grid;
    var boardSize = this.state.boardSize;

    return (
      <View style={styles.game}>
        <Score/>
        <Grid grid={grid}
          boardSize={boardSize}/>
        <Options/>
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


