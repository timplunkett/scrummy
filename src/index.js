import React from 'react';
import { render } from 'react-dom';
import '!style!css!sass!./scss/main.scss';

const App = () => <p>Play Scrummy!</p>;

render(<App />, document.getElementsByTagName('main')[0]);
