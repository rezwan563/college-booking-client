import PropTypes from 'prop-types'

const SectionTitle = ({ title }) => {
  return <p className="text-2xl uppercase md:text-5xl px-5 mb-8">{title}</p>;
};

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired
  }
  

export default SectionTitle;
