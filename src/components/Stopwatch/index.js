// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  isTimerRunning: false,
  timeElapsedInSeconds: 0,
}

class Stopwatch extends Component {
  state = initialState

  onResetTimer = () => {
    clearInterval(this.intervalId)
    this.setState(initialState)
  }

  onStopTimer = () => {
    clearInterval(this.intervalId)
    this.setState({isTimerRunning: false})
  }

  incrementTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
    this.setState({isTimerRunning: true})
  }

  onStartTimer = () => {
    this.intervalId = setInterval(this.incrementTimer, 1000)
  }

  renderSecondsAndMinutesInTimeFormat = () => {
    const {timeElapsedInSeconds} = this.state

    const seconds = Math.floor(timeElapsedInSeconds % 60)
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    const stringifiedMinutes = minutes < 10 ? `0${minutes}` : minutes
    const stringifiedSeconds = seconds < 10 ? `0${seconds}` : seconds

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  render() {
    const {isTimerRunning} = this.state
    return (
      <div className="stop-watch-app-container">
        <h1 className="main-heading">Stopwatch</h1>
        <div className="stop-watch-timer-conatiner">
          <div className="stopwatch-timer-img-heading-card">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-timer-img"
            />
            <p className="timer-heading">Timer</p>
          </div>
          <h1 className="timer">
            {this.renderSecondsAndMinutesInTimeFormat()}
          </h1>
          <div className="buttons-card">
            <button
              className="button start-btn"
              type="button"
              onClick={this.onStartTimer}
              disabled={isTimerRunning}
            >
              Start
            </button>
            <button
              className="button stop-btn"
              type="button"
              onClick={this.onStopTimer}
            >
              Stop
            </button>
            <button
              className="button reset-btn"
              type="button"
              onClick={this.onResetTimer}
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
