import React from 'react';
import FeedbackOptions from '../FeedbackOptions';
import Statistics from '../Statistics';
import Section from '../Section';
import s from './App.module.css';

class App extends React.Component {
  static defaultProps = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  state = {
    good: this.props.good,
    neutral: this.props.neutral,
    bad: this.props.bad,
  };

  onLeaveFeedback = name => {
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback = () => {
    const { good, bad, neutral } = this.state;
    const count = good + bad + neutral;
    return count;
  };

  countPositiveFeedbackPercentage = () => {
    const count = this.countTotalFeedback();
    const countPositiv = Math.round((100 / count) * this.state.good);
    return countPositiv;
  };

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <div className={s.app}>
        <Section title="Plese leave feedback">
          <FeedbackOptions
            options={['good', 'neutral', 'bad']}
            onLeaveFeedback={this.onLeaveFeedback}
          />
        </Section>

        <Section title="Statistics">
          <Statistics
            names={['Good', 'Neutral', 'Bad']}
            value={[good, neutral, bad]}
            total="Total"
            feedback="Positive Feedback"
            countTotalFeedback={this.countTotalFeedback}
            countPositiveFeedbackPercentage={
              this.countPositiveFeedbackPercentage
            }
          />
        </Section>
      </div>
    );
  }
}

export default App;
