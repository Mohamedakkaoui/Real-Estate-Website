import React, { useState } from "react";
import { useToast } from "@chakra-ui/react";

function Toast() {
  const toast = useToast();
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  const showToast = () => {
    toast({
      title: "Account created.",
      description: "We've created your account for you.",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };

  return (
    <>
      <button onClick={showToast}>show toast</button>
    </>
  );
}

export default Toast;
