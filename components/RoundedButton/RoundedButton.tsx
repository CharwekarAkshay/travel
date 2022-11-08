import React from "react";

interface RoundedButtonProps {
  text: string;
  type?: "solid" | "transparent" | "bordered";
  color?: string;
}

const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const { text, type, color } = props;

  let classes = `text-${color} hover:bg-${color}-light hover:text-white px-4 py-2 rounded-full`;

  switch (type) {
    case "transparent":
      classes = `text-${color} hover:bg-${color}-light hover:text-white px-4 py-2 rounded-full`;
      break;
    case "solid":
      classes = `bg-${color} hover:bg-${color}-light text-white px-4 py-2 rounded-full`;
      break;
    case "bordered":
      classes = `border-${color}-light border text-${color} hover:bg-${color}-light hover:text-white px-4 py-2 rounded-full`;
      break;
  }

  return <div className={classes}>{text}</div>;
};

RoundedButton.defaultProps = {
  type: "transparent",
  color: "agoda-blue",
};

export default RoundedButton;
