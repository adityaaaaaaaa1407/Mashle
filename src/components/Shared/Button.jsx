/* eslint-disable react/prop-types */

const Button = ({ text, bgColor, textColor, handler = () => {} }) => {
  return (
    <button
      className={`${bgColor} ${textColor}
  cursor-pointer px-8 py-2  relative z-10 duration-300 hover:scale-105 `}
    >
      {text}
    </button>
  );
};

export default Button;
