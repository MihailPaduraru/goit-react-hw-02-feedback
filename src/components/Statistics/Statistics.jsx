

import React, { Component } from 'react';

class Statistics extends Component {
  render() {
    const { good, neutral, bad, total, positivePercentage } = this.props;

    return (
      <div>
        <h2>Statistics</h2>
        {total === 0 ? (
          <p>There is no feedback</p>
        ) : (
          <>
            <p>Good: {good}</p>
            <p>Neutral: {neutral}</p>
            <p>Bad: {bad}</p>
            <p>Total: {total}</p>
            <p>Positive Feedback Percentage: {positivePercentage.toFixed(2)}%</p>
          </>
        )}
      </div>
    );
  }
}

export default Statistics;
