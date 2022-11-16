import { Button, Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import React from "react";
import PasswordInput from "../PasswordInput/PasswordInput";
import TextInput from "../TextInput/TextInput";

const SignIn = () => {
  const [show, setShow] = React.useState(false);
  const handleClick = () => setShow(!show);
  return (
    <div className="flex flex-col gap-6">
      <TextInput name="Email" placeholder="Email" title="Email" />
      <PasswordInput name="Password" placeholder="Password" title="Password" />
    </div>
  );
};

export default SignIn;
