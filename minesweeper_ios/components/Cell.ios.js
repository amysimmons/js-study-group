var React = require('react-native');
var { Icon, } = require('react-native-icons');

var {
  StyleSheet,
  Text,
  View,
  Dimensions,
  TouchableHighlight,
} = React;

var Cell = React.createClass({

  handleCellPress() {
    console.log('pressing me')
    var grid = this.props.grid;
    var xPos = this.props.xPos;
    var yPos = this.props.yPos;
    var clicked = grid[xPos][yPos];
    console.log('cell: ', xPos, yPos);

    if (this.props.placeFlag) {
      this.props.flagCell(clicked);
    }else{
      this.props.revealCell(clicked);
    }
  },

  render() {
    var cellHeight = this.props.cellHeight;
    var handleCellPress = this.handleCellPress;

    var grid = this.props.grid;
    var xPos = this.props.xPos;
    var yPos = this.props.yPos;   
    var cell = grid[xPos][yPos];

    //show flag for flagged cells
    if (cell.flagged){
      return (
        <TouchableHighlight onPress={handleCellPress} underlayColor="#00A6A6">
          <View style={[styles.cell, styles.cellFlag, {height: cellHeight}]}>
            <Icon
              name='fontawesome|flag-o'
              size={30}
              color='#7F888D'
              style={styles.flag}/>
          </View>
        </TouchableHighlight>
      );
    }
    //show mine if mine is clicked on
    else if (cell.mine && cell.selected){
      return (
        <TouchableHighlight onPress={handleCellPress} underlayColor="#00A6A6">
          <View style={[styles.cell, styles.cellMine, {height: cellHeight}]}>
            <Icon
              name='fontawesome|bomb'
              size={30}
              color='#7F888D'
              style={styles.bomb}/>
          </View>
        </TouchableHighlight>
      );
    }
    //otherwise show surrounding mine count
    else if (cell.selected && !cell.mine && !cell.flagged){
      return (
        <TouchableHighlight onPress={handleCellPress} underlayColor="#00A6A6">
          <View style={[styles.cell, styles.cellSurroundingMines, {height: cellHeight}]}>
            <Text style={styles.mineCount} numberOfLines={1}>{cell.surroundingMines.toString()}</Text>
          </View>
        </TouchableHighlight>
      ); 
    } 
    else {
      return (
        <TouchableHighlight onPress={handleCellPress} underlayColor="#00A6A6">
          <View style={[styles.cell, {height: cellHeight}]}>
          </View>
        </TouchableHighlight>
      );
    }
  }
});

var styles = StyleSheet.create({
  cell: {
    width: Dimensions.get('window').width / 10,
    backgroundColor: '#00A6A6',
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#fff',
    alignItems: 'center',
  },
  cellMine: {
    backgroundColor: '#FFFFE3',
  },
  cellFlag: {
    backgroundColor: '#FFFFE3',
  },
  cellSurroundingMines: {
    backgroundColor: '#FFFFE3',
  },
  mineCount: {
    fontSize: 18,
  },
  flag: {
    width: 30,
    height: 30,
    flexDirection: 'row'
  },
  bomb: {
    width: 30,
    height: 30,
    flexDirection: 'row'
  }
});

export default Cell;