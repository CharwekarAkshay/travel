import React from "react";

interface RoundedButtonProps {
  text: string;
  type?: "solid" | "transparent" | "bordered";
  onClick: () => void
}

const RoundedButton: React.FC<RoundedButtonProps> = (props) => {
  const { text, type, onClick } = props;

  let classes = `px-4 py-2 cursor-pointer rounded-full `;
  switch (type) {
    case "transparent":
      classes += `px-4 py-2 cursor-pointer rounded-full text-agoda-blue hover:bg-agoda-blue-light hover:text-white`;
      break;
    case "solid":
      classes += `bg-agoda-blue hover:bg-agoda-blue-light text-white`;
      break;
    case "bordered":
      classes += `px-4 py-2 cursor-pointer rounded-full border-agoda-blue-light border text-agoda-blue hover:bg-agoda-blue-light hover:text-white`;
      break;
  }
  
  return <div className={classes} onClick={onClick}>{text}</div>;
};

RoundedButton.defaultProps = {
  type: "transparent",
};

export default RoundedButton;
