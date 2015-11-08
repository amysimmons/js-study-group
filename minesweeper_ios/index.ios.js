/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

import Game from './components/Game.ios.js';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
} = React;

var minesweeper_ios = React.createClass({
  render: function() {
    return (
      <NavigatorIOS
        style={styles.container}
        initialRoute={{
          title: "Minesweeper Native",
          component: Game
        }} />
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

AppRegistry.registerComponent('minesweeper_ios', () => minesweeper_ios);
