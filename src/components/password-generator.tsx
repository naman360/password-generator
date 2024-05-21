const PasswordGenerator = () => {
  const checkboxData = [
    {
      title: "Include Uppercase Letters",
      checked: false,
    },
    {
      title: "Include Lowercase Letters",
      checked: false,
    },
    {
      title: "Include Numbers",
      checked: false,
    },
    {
      title: "Include Special Characters",
      checked: false,
    },
  ];
  return (
    <div
      style={{
        backgroundColor: "#24232b",
        color: "#fff",
        padding: "20px",
        width: "500px",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: "bold",
          fontSize: "20px",
        }}
      >
        <div>Password</div>
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
        >
          Copy
        </button>
      </div>

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
          <label htmlFor="">5</label>
        </span>
        <input type="range" max={20} min={7} name="" id="" />
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
            <input type="checkbox" checked={checkbox.checked} />
            <label htmlFor="">{checkbox.title}</label>
          </div>
        ))}
      </div>

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
      >
        Generate
      </button>
    </div>
  );
};

export default PasswordGenerator;
