import PropTypes from 'prop-types';
import s from './Notification.module.css';

const massage = ({ massage }) => {
  return <span className={s.massage}>{massage}</span>;
};

massage.propTypes = { massage: PropTypes.string.isRequired };

export default massage;
