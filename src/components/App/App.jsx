import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import s from './App.module.css';

class App extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const count = this.countTotalFeedback();
    const countPositiv = Math.round((100 / count) * this.state.good);
    return countPositiv;
  };

  render() {
    const options = Object.entries(this.state);

    const total = this.countTotalFeedback();
    const percent = this.countPositiveFeedbackPercentage();
    return (
      <div className={s.app}>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={options}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            names={options}
            total="Total"
            feedback="Positive Feedback"
            countTotalFeedback={total}
            countPositiveFeedbackPercentage={percent}
          />
        </Section>
      </div>
    );
  }
}

export default App;
