import PropTypes from 'prop-types';
import FeedbackOptions from 'components/FeedBack/FeedbackOptions';
import React from 'react';
import Statistics from './Statistics';
import Title from './Title';

class FeedBack extends React.Component {
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
    const countPositiv = Math.round(
      (100 / count) * (this.state.good + this.state.neutral / 2)
    );
    return countPositiv;
  };

  render() {
    const { bad, good, neutral } = this.state;
    return (
      <>
        <Title title="Plese leave feedback" />
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={this.onLeaveFeedback}
        />
        <Title title="Statistics" />
        <Statistics
          names={['Good', 'Neutral', 'Bad']}
          value={[good, neutral, bad]}
          total="Total"
          feedback="Positive Feedback"
          countTotalFeedback={this.countTotalFeedback}
          countPositiveFeedbackPercentage={this.countPositiveFeedbackPercentage}
        />
      </>
    );
  }
}

FeedbackOptions.propType = {
  feedback: PropTypes.string.isRequired,
  total: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired),
  names: PropTypes.arrayOf(PropTypes.string.isRequired),
  value: PropTypes.arrayOf(PropTypes.number.isRequired),
  countTotalFeedback: PropTypes.func.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
};

export default FeedBack;
