import React from 'react/addons';
import Slider from './Slider';
import Slider2 from './Slider2';
require("./styles/stylesheet.css");

React.render(<Slider />, document.getElementById('fade-gallery'));
React.render(<Slider2 />, document.getElementById('slide-gallery'));