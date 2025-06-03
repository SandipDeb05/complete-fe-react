import PropTypes from "prop-types";

const Button = ({ label = "", backgroundColor = "", size, handleClick }) => {
  let scale = 1;
  if (size === "sm") scale = 0.8;
  if (size === "lg") scale = 1.2;
  const style = {
    backgroundColor,
    padding: `${scale * 0.5}rem ${scale * 1.5}rem`,
    border: "none",
  };

  return (
    <button style={style} onClick={handleClick} className="btn btn-primary">
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  backgroundColor: PropTypes.string,
};

export default Button;
