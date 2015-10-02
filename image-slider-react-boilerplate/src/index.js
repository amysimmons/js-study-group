import React from 'react/addons';
import Slider from './scripts/fade-gallery/Slider';
import Slider2 from './scripts/slide-gallery/Slider2';
require("./styles/stylesheet.css");

React.render(<Slider />, document.getElementById('fade-gallery'));
React.render(<Slider2 />, document.getElementById('slide-gallery'));