import React from "react";

interface RoundedButtonProps {
  text: string;
  type?: "solid" | "transparent" | "bordered";
  color?: string;
  onClick: () => void
}

const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const { text, type, color, onClick } = props;

  let classes = `px-4 py-2 cursor-pointer rounded-full `;

  switch (type) {
    case "transparent":
      classes += `text-${color} hover:bg-${color}-light hover:text-white`;
      break;
    case "solid":
      classes += `bg-${color} hover:bg-${color}-light text-white`;
      break;
    case "bordered":
      classes += `border-${color}-light border text-${color} hover:bg-${color}-light hover:text-white`;
      break;
  }
  
  return <div className={classes} onClick={onClick}>{text}</div>;
};

RoundedButton.defaultProps = {
  type: "transparent",
  color: "agoda-blue",
};

export default RoundedButton;
