import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';

import Game from './Components/Game.tsx'

interface AppProps { }
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div className="App">
        <Hello name={this.state.name} />
        <p>
          Start editing to see some magic happen :)
        </p>
        <Game Title={"Test"} />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
