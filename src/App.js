import {Component} from 'react'
import Clock from './components/Clock'

import './App.css'

class App extends Component {
  state = {isShowClock: false}

  clickOnButton = () => {
    this.setState(prevState => {
      const {isShowClock} = prevState
      return {isShowClock: !isShowClock}
    })
  }

  render() {
    const {isShowClock} = this.state
    return (
      <div className="app-container">
        <button
          type="button"
          className="toggle-button"
          onClick={this.clickOnButton}
        >
          {isShowClock ? 'Hide Clock' : 'Show Clock'}
        </button>
        {isShowClock && <Clock />}
      </div>
    )
  }
}

export default App
