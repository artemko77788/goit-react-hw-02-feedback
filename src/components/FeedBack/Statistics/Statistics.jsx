import Notification from '../Notification';
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
export default Statistics;
