import React, { Component} from 'react';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import Statistics from './Statistics/Statistics';
import Section from './Section/Section';


class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
  };

  handleFeedback = (type) =>{
    this.setState((prevState)=> ({
      ...prevState,
      [type]: prevState[type] + 1
    }));
  };

  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
  };

  countPositiveFeedbackPercentage = () => {
    const total = this.countTotalFeedback();
    return total === 0 ? 0 : (this.state.good / total) * 100;

  };
  
  render() {
    const { good,neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();

    return (
      <div>
        <h1>Feedback App</h1>

        <Section title="Leave Feedback">
          <FeedbackOptions options={['good', 'neutral', 'bad']} 
          onLeaveFeedback={this.handleFeedback} />
        </Section>
      
       <Section >

        <Statistics 
        good = {good} 
        neutral ={neutral} 
        bad = {bad}  
        total = {total} 
        positivePercentage={positivePercentage}/>

       </Section>
      </div>
    );
}
}

export default App;