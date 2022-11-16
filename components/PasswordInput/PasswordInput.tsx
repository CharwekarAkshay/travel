import React, { useState } from "react";

import { motion } from "framer-motion";
interface PasswordInputProps {
  name: string;
  placeholder?: string;
  title: string;
}

const PasswordInput: React.FC<PasswordInputProps> = (props) => {
  const { name, placeholder, title } = props;
  
  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePasswordField = () => {
    setShowPassword(!showPassword);
  }

  return (
    <div className="flex flex-col gap-2">
      <div>{title}:</div>
      <div className="flex flex-row border-2 border-agoda-blue-light  focus-visible:border-agoda-blue rounded-md p-2">
        <input
          type={showPassword ? "text" : "password"}
          name={name}
          placeholder={placeholder}
          id={`${name}-id`}
          className="outline-none border-none flex-grow"
        />
        <motion.div
          whileTap={{ scale: 0.95, opacity: 1 }}
          style={{ opacity: 0.8 }}
        >
          <button
            className="bg-agoda-blue-light py-1 px-2 text-xs rounded-full"
            onClick={handleTogglePasswordField}
          >
            {showPassword ? "Hide" : "Show"}
          </button>
        </motion.div>
      </div>
    </div>
  );
};

export default PasswordInput;
