import React from "react";

interface TextInputProps {
  name: string;
  placeholder?: string;
  title: string;
}

const TextInput: React.FC<TextInputProps> = (props) => {
  const { name, placeholder, title } = props;
  return (
    <div className="flex flex-col gap-2">
      <div>{title}:</div>
      <input
        type="text"
        name={name}
        placeholder={placeholder}
        id={`${name}-id`}
        className="outline-none border-2 border-agoda-blue-light  focus-visible:border-agoda-blue rounded-md p-2"
      />
    </div>
  );
};

export default TextInput;
