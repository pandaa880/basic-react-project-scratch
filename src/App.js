import React from 'react';

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      isActive: false
    }
  }

  render() {
    return (
      <div>
        {this.state.isActive ? (
          <h1>😎😎😎🔥🔥🔥</h1>
        ) : (
          <h1>👻👻👻</h1>
        )}
        <button type="button" onClick={() => this.setState({isActive: !this.state.isActive})}>Toggle</button>
      </div>
      
    );
  }
}

export default App;