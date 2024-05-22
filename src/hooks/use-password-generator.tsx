import { useState } from "react";

const usePasswordGenerator = () => {
  const [password, setPassword] = useState<string>("");
  const [errorMsg, setErrorMsg] = useState<string>("");

  const generatePassword = (
    checkboxData: {
      title: string;
      checked: boolean;
      key: string;
    }[],
    length: number
  ) => {
    console.log(length);
    const filteredCheckboxes = checkboxData.filter(
      (checkbox) => checkbox.checked === true
    );
    let charset = "",
      generatedPassword = "";

    if (filteredCheckboxes.length === 0) {
      setPassword("");
      setErrorMsg("Select atleast one option");
      return;
    }

    filteredCheckboxes.forEach((checkbox) => {
      switch (checkbox.key) {
        case "UPPERCASE":
          charset += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
          break;
        case "LOWERCASE":
          charset += "abcdefghijklmnopqrstuvwxyz";
          break;
        case "NUMBERS":
          charset += "1234567890";
          break;
        case "SPECIAL_CHARACTERS":
          charset += "!@#$%^&*()";
          break;
        default:
          break;
      }
    });
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      generatedPassword += charset[randomIndex];
    }

    setPassword(generatedPassword);
    setErrorMsg("");
  };

  return { password, generatePassword, errorMsg };
};

export default usePasswordGenerator;
