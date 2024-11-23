import { useState } from "react";

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState("");

  function getValue(value: string) {
    setCurrentInput((prevInput) => prevInput + value);
  }

  // クリアボタンが押されたときの処理
  function clearKey(): void {
    setCurrentInput("");
  }

  function equalKey(equalKey: string) {
    calcResult();
  }
  const calcResult = () => {
    try {
      setCurrentInput(eval(currentInput));
    } catch (error) {}
  };

  const inputStyle = {
    fontSize: 50,
    borderRadius: 20,
    width: 80,
    height: 80,
    border: "none",
    margin: 8,
  };

  return (
    <form
      style={{
        height: 500,
        width: 400,
        margin: "20 auto",
        padding: 20,
        border: "1 solid #ccc",
        borderRadius: 10,
        textAlign: "center",
        backgroundColor: "darkgrey",
      }}
    >
      {/* <!-- 液晶 --> */}
      <table>
        {/* <td colspan="4"> */}
        <input
          type="text"
          name="display"
          value={currentInput}
          readOnly
          style={{
            height: 100,
            width: "100%",
            textAlign: "right",
            fontSize: 60,
            display: "block",
            margin: "0 auto",
          }}
        />
        {/* </td> */}
      </table>

      {/* <!-- 電卓入力form --> */}
      <table
        className="input-form"
        style={{
          width: "100%",
        }}
      >
        <tr>
          <td>
            <input
              type="button"
              value="7"
              style={inputStyle}
              onClick={() => getValue("7")}
            />
          </td>
          <td>
            <input
              type="button"
              value="8"
              style={inputStyle}
              onClick={() => getValue("8")}
            />
          </td>
          <td>
            <input
              type="button"
              value="9"
              style={inputStyle}
              onClick={() => getValue("9")}
            />
          </td>
          <td>
            <input
              type="button"
              value="÷"
              style={inputStyle}
              onClick={() => getValue("/")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="button"
              value="4"
              style={inputStyle}
              onClick={() => getValue("4")}
            />
          </td>
          <td>
            <input
              type="button"
              value="5"
              style={inputStyle}
              onClick={() => getValue("5")}
            />
          </td>
          <td>
            <input
              type="button"
              value="6"
              style={inputStyle}
              onClick={() => getValue("6")}
            />
          </td>
          <td>
            <input
              type="button"
              value="×"
              style={inputStyle}
              onClick={() => getValue("*")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="button"
              value="1"
              style={inputStyle}
              onClick={() => getValue("1")}
            />
          </td>
          <td>
            <input
              type="button"
              value="2"
              style={inputStyle}
              onClick={() => getValue("2")}
            />
          </td>
          <td>
            <input
              type="button"
              value="3"
              style={inputStyle}
              onClick={() => getValue("3")}
            />
          </td>
          <td>
            <input
              type="button"
              value="-"
              style={{ ...inputStyle, paddingBottom: 10,}}
              onClick={() => getValue("-")}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input
              type="button"
              value="0"
              style={inputStyle}
              onClick={() => getValue("0")}
            />
          </td>
          <td>
            <input
              type="button"
              value="C"
              style={{...inputStyle,backgroundColor: "#ff9500",}}
              onClick={() => clearKey()}
            />
          </td>
          <td>
            <input
              type="button"
              value="="
              style={inputStyle}
              onClick={() => equalKey("=")}
            />
          </td>
          <td>
            <input
              type="button"
              value="+"
              style={inputStyle}
              onClick={() => getValue("+")}
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
