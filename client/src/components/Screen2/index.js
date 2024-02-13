import React from "react";
import "./styles.css";
import { Link } from "react-scroll";

const Screen2 = (props) => {
  return (
    <div id={Number(props.sequency)} className="screen-full" style={{background: props.bgColor, color: props.textColor}}>
      <div className="container">
        <header>
          <div>{props.imageText}</div>
        </header>
        <div>
          <h1><small>{props.title}</small></h1>
          <p>{props.text}</p>
        </div>
        <footer>
          <Link
            activeClass="active"
            to={Number(props.sequency) + 1}
            spy={true}
            smooth={true}
            offset={0}
            duration={1200}
            ignoreCancelEvents={true}
          >{props.btnText}</Link>
        </footer>
      </div>
    </div>
  );
};

export default Screen2;
