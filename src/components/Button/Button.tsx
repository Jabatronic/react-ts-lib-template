import React from "react";

interface ButtonProps {
  label: string;
}

const Button = (props: ButtonProps): JSX.Element => {
  return <button>{props.label}</button>;
};

export default Button;
