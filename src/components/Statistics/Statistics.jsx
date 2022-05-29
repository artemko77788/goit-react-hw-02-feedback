import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import s from './Statistics.module.css';

const Statistics = ({
  names,
  countTotalFeedback,
  total,
  countPositiveFeedbackPercentage,
  feedback,
  value,
}) => {
  return countTotalFeedback() === 0 ? (
    <Notification massage="There is no feedback" />
  ) : (
    <div className={s.statistics}>
      {names.map((name, index) => {
        return (
          <span key={name}>
            {name}: {value[index]}
          </span>
        );
      })}

      <span>
        {total}: {countTotalFeedback()}
      </span>

      <span
        className={countPositiveFeedbackPercentage() <= 50 ? s.red : s.green}
      >
        {feedback}: {countPositiveFeedbackPercentage()}%
      </span>
    </div>
  );
};

Statistics.propTypes = {
  names: PropTypes.arrayOf(PropTypes.string.isRequired),
  countTotalFeedback: PropTypes.func.isRequired,
  total: PropTypes.string.isRequired,
  countPositiveFeedbackPercentage: PropTypes.func.isRequired,
  feedback: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.node.isRequired),
};
export default Statistics;
