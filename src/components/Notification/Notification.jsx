import PropTypes from 'prop-types';
import s from './Notification.module.css';

const Notification = ({ massage }) => {
  return <p className={s.massage}>{massage}</p>;
};

Notification.propTypes = { massage: PropTypes.string.isRequired };

export default Notification;
