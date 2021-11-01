import {Component} from 'react'

import './index.css'

class CoinToss extends Component {
  state = {
    headsCount: 0,
    tailsCount: 0,
    isHead: true,
  }

  tossCoin = () => {
    const tossResult = Math.floor(Math.random() * 2)

    this.setState(prevState => {
      if (tossResult === 0) {
        return {headsCount: prevState.headsCount + 1, isHead: true}
      }
      return {tailsCount: prevState.tailsCount + 1, isHead: false}
    })
  }

  render() {
    const {headsCount, tailsCount, isHead} = this.state

    const total = headsCount + tailsCount

    return (
      <div className="coin-toss-bcg-container">
        <div className="coin-toss-container">
          <h1 className="head-toss-main-heading"> Coin Toss Game </h1>
          <p className="head-tail-title"> Heads (or) Tails </p>
          {isHead && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/heads-img.png"
              className="head-tails-image"
              alt="toss result"
            />
          )}
          {!isHead && (
            <img
              src="https://assets.ccbp.in/frontend/react-js/tails-img.png"
              className="head-tails-image"
              alt="toss result"
            />
          )}
          <button
            className="toss-coin-button"
            onClick={this.tossCoin}
            type="button"
          >
            {' '}
            Toss Coin{' '}
          </button>
          <div className="head-tails-count-container">
            <p> Total: {total}</p>
            <p> Heads: {headsCount}</p>
            <p> Tails: {tailsCount}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
