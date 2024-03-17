import { useEffect } from "react";
import MoleHill from "./assets/molehill.png";
import PropTypes from "prop-types";

function EmptySlot(props) {
  // Your component code here

  EmptySlot.propTypes = {
    setDisplayMole: PropTypes.func.isRequired,
    handleClick: PropTypes.func.isRequired,
  };
  useEffect(() => {
    // Feel free to adjust this number as you see fit.
    // It is your game to tune!
    let randSeconds = Math.ceil(Math.random() * 5000);
    let timer = setTimeout(() => {
      props.toggle(true);
    }, randSeconds);
    return () => clearTimeout(timer);
  });

  return (
    <div>
      <img
        style={{ width: "30vw" }}
        src={MoleHill}
        onClick={props.handleClick}
      />
    </div>
  );
}

export default EmptySlot;
