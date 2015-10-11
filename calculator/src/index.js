import React from 'react';
import Calculator from './scripts/calculator/Calculator';
import ScientificCalculator from './scripts/scientific-calculator/Calculator';
require("./styles/stylesheet.scss");

React.render(<Calculator />, document.getElementById('calculator'));
React.render(<ScientificCalculator />, document.getElementById('scientific-calculator'));
