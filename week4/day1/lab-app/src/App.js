import React, { Component } from 'react'

import Hello from './components/Hello'

class App extends Component {

  render() {
    return (
      <div>
        <Hello name="Mohamed" age={16} />
        <Hello name="Ahmad" age={87} />
        <Hello name="Adnen" age={160} />
      </div>
    )
  }
}

export default App