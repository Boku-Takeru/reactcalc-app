import { useState } from "react";

export default function Calculator() {
  const [display, setDisplay] = useState(0);
  const [currentInput, setCurrentInput] = useState(0);
  const [operator, setOperator] = useState(null);

  function getValue(value: number ) {
    setCurrentInput((prevInput) => prevInput + value);
  }

  function handleOperator
  // 演算子ボタンが押されたときの処理
  // 同じ演算子の入力を防ぐ
  function handleOperator(operator) {
    if (currentInput !== "" && !currentInput.endsWith(operator)) {
      currentInput += operator;
    }
  }

  // クリアボタンが押されたときの処理
  function clearkey() {
    currentInput = "";
    updateDisplay("");
  }

  // イコールボタンが押されたときの処理
  function epualkey() {
    try {
      const result = eval(currentInput.replace("×", "*").replace("÷", "/"));
      currentInput = result.toString();
      updateDisplay(currentInput);
    } catch {
      updateDisplay("Error");
      currentInput = "";
    }
  }

  return (
    <form>
      {/* <!-- 液晶 --> */}
      <table>
        {/* <td colspan="4"> */}
        <input type="text" name="display" value="" readOnly />
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
            <input type="button" value="7" onClick={() => getValue(7)} />
          </td>
          <td>
            <input type="button" value="8" onClick={() => getValue(8)} />
          </td>
          <td>
            <input type="button" value="9" onClick={() => getValue(9)} />
          </td>
          <td>
            <input
              type="button"
              value="÷"
              onClick={() => "handleOperator('/')"}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="4" onClick={() => getValue(4)} />
          </td>
          <td>
            <input type="button" value="5" onClick={() => getValue(5)} />
          </td>
          <td>
            <input type="button" value="6" onClick={() => getValue(6)} />
          </td>
          <td>
            <input
              type="button"
              value="×"
              onClick={() => "handleOperator('×')"}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="1" onClick={() => getValue(1)} />
          </td>
          <td>
            <input type="button" value="2" onClick={() => getValue(2)} />
          </td>
          <td>
            <input type="button" value="3" onClick={() => getValue(3)} />
          </td>
          <td>
            <input
              type="button"
              value="-"
              onClick={() => "handleOperator('-')"}
            />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="0" onClick={() => getValue(0)} />
          </td>
          <td>
            <input type="button" value="C" onClick="clearKey(this)" />
          </td>
          <td>
            <input type="button" value="=" onClick="equalKey(this)" />
          </td>
          <td>
            <input
              type="button"
              value="+"
              onClick={() => "handleOperator('+')"}
            />
          </td>
        </tr>
      </table>
    </form>
  );
}
