import React from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Jokes from './FlipCards';

const styles = {
  fontFamily: 'sans-serif',
  textAlign: 'center',
};

const App = () => (
  <div style={styles}>
    <Hello name="Flip Cards" />
    <Jokes />
  </div>
);

render(<App />, document.getElementById('root'));
