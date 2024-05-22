import { useState } from "react";
import usePasswordGenerator from "../hooks/use-password-generator";

const PasswordGenerator = () => {
  const [length, setLength] = useState<number>(7);
  const { generatePassword, password, errorMsg } = usePasswordGenerator();
  const [copied, setCopied] = useState(false);
  const [checkboxData, setCheckboxData] = useState<
    {
      title: string;
      checked: boolean;
      key: string;
    }[]
  >([
    {
      title: "Include Uppercase Letters",
      key: "UPPERCASE",
      checked: false,
    },
    {
      title: "Include Lowercase Letters",
      key: "LOWERCASE",
      checked: false,
    },
    {
      title: "Include Numbers",
      key: "NUMBERS",
      checked: false,
    },
    {
      title: "Include Special Characters",
      key: "SPECIAL_CHARACTERS",
      checked: false,
    },
  ]);

  const handleCheckboxClick = (index: number) => {
    const updatedCheckbox = [...checkboxData];
    updatedCheckbox[index].checked = !updatedCheckbox[index].checked;
    setCheckboxData(updatedCheckbox);
  };
  const handleCopyPassword = () => {
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <div
      style={{
        backgroundColor: "#24232b",
        color: "#fff",
        padding: "20px",
        width: "500px",
      }}
    >
      {password && (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: "bold",
            fontSize: "20px",
          }}
        >
          <div>{password}</div>
          <button
            style={{
              outline: "none",
              border: "none",
              background: "#2a8b8b",
              color: "#fff",
              textTransform: "uppercase",
              padding: "10px 20px",
              cursor: "pointer",
              borderRadius: "10px",
            }}
            onClick={() => handleCopyPassword()}
          >
            {copied ? "Copied" : "Copy"}
          </button>
        </div>
      )}

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          margin: "10px 0px",
          fontSize: "18px",
        }}
      >
        <span
          style={{
            display: "flex",
            justifyContent: "space-between",
            marginBottom: "10px",
          }}
        >
          <label htmlFor="">Character Length:</label>
          <label htmlFor="">{length}</label>
        </span>
        <input
          type="range"
          max={20}
          min={5}
          value={length}
          onChange={(e) => setLength(Number(e.target.value))}
        />
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "10px",
          marginBottom: "20px",
        }}
      >
        {checkboxData.map((checkbox, index) => (
          <div key={`checkbox-${index}`}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxClick(index)}
              checked={checkbox.checked}
            />
            <label htmlFor="">{checkbox.title}</label>
          </div>
        ))}
      </div>
      {errorMsg && (
        <div style={{ marginBottom: "10px", color: "red" }}>{errorMsg}</div>
      )}
      <button
        style={{
          outline: "none",
          border: "none",
          background: "#2a8b8b",
          color: "#fff",
          textTransform: "uppercase",
          padding: "10px 20px",
          cursor: "pointer",
          borderRadius: "10px",
          width: "100%",
        }}
        onClick={() => generatePassword(checkboxData, length)}
      >
        Generate
      </button>
    </div>
  );
};

export default PasswordGenerator;
