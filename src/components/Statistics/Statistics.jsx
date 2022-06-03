import PropTypes from 'prop-types';
import Notification from 'components/Notification';
import s from './Statistics.module.css';

const Statistics = ({
  names,
  countTotalFeedback,
  total,
  countPositiveFeedbackPercentage,
  feedback,
}) => {
  return (
    <>
      {!countTotalFeedback && <Notification massage="There is no feedback" />}

      {!!countTotalFeedback && (
        <div className={s.statistics}>
          {names.map(([name, index]) => {
            return (
              <span key={name} className={s.text}>
                {name} : {index}
              </span>
            );
          })}
          <span>
            {total}: {countTotalFeedback}
          </span>

          <span
            className={countPositiveFeedbackPercentage <= 50 ? s.red : s.green}
          >
            {feedback}: {countPositiveFeedbackPercentage}%
          </span>
        </div>
      )}
    </>
  );
};

Statistics.propTypes = {
  names: PropTypes.arrayOf(PropTypes.node.isRequired),
  countTotalFeedback: PropTypes.number.isRequired,
  total: PropTypes.string.isRequired,
  countPositiveFeedbackPercentage: PropTypes.number.isRequired,
  feedback: PropTypes.string.isRequired,
  value: PropTypes.arrayOf(PropTypes.node.isRequired),
};
export default Statistics;
