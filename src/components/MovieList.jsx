import propTypes from "prop-types"; //rafce
const MovieList = ({ title }) => {
  return <div className="text-white p-10 mb-10">{title}</div>;
};

MovieList.propTypes = {
  title: propTypes.string.isRequired,
};

export default MovieList;
