import PropTypes from 'prop-types';
import s from './Title.module.css';

const Title = ({ title }) => {
  return <span className={s.title}>{title}</span>;
};

Title.propTypes = { title: PropTypes.string.isRequired };

export default Title;
