import { useState } from "react";

function useControl() {
  const [currentText, setCurrentText] = useState("");

  const handleChange = (event) => {
    setCurrentText(event.target.value);
  };

  return [currentText, handleChange];
}

export default useControl;
