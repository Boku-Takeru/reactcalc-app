import { useState } from "react";

export default function Calculator() {
  const [currentInput, setCurrentInput] = useState("");
  const [result, setResult] = useState("");

  function getValue(value: string) {
    setCurrentInput((prevInput) => prevInput + value);
  }

  // クリアボタンが押されたときの処理
  function clearKey(): void {
    setCurrentInput("");
    setResult("");
  }

  // イコールボタンが押されたときの処理
  function equalKey(equalKey: string) {
    try {
      const calcResult = eval(currentInput);
      setCurrentInput(calcResult.toString());
    } catch {
      setCurrentInput("Error");
    }
  }

  // function equalKey (equalKey:string){
  //   setResult("");
  //   calculateResult();
  // }
  // const calculateResult = () => {
  //   try {
  //     setCurrentInput(eval(currentInput));
  //   } catch (error) {
  //     setResult("Enter Valid Operation");
  //   }
  // };

  return (
    <form>
      {/* <!-- 液晶 --> */}
      <table>
        {/* <td colspan="4"> */}
        <input type="text" name="display" value={currentInput} readOnly />
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
            <input type="button" value="7" onClick={() => getValue("7")} />
          </td>
          <td>
            <input type="button" value="8" onClick={() => getValue("8")} />
          </td>
          <td>
            <input type="button" value="9" onClick={() => getValue("9")} />
          </td>
          <td>
            <input type="button" value="÷" onClick={() => getValue("/")} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="4" onClick={() => getValue("4")} />
          </td>
          <td>
            <input type="button" value="5" onClick={() => getValue("5")} />
          </td>
          <td>
            <input type="button" value="6" onClick={() => getValue("6")} />
          </td>
          <td>
            <input type="button" value="×" onClick={() => getValue("*")} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="1" onClick={() => getValue("1")} />
          </td>
          <td>
            <input type="button" value="2" onClick={() => getValue("2")} />
          </td>
          <td>
            <input type="button" value="3" onClick={() => getValue("3")} />
          </td>
          <td>
            <input type="button" value="-" onClick={() => getValue("-")} />
          </td>
        </tr>
        <tr>
          <td>
            <input type="button" value="0" onClick={() => getValue("0")} />
          </td>
          <td>
            <input type="button" value="C" onClick={() => clearKey()} />
          </td>
          <td>
            <input type="button" value="=" onClick={() => equalKey("=")} />
          </td>
          <td>
            <input type="button" value="+" onClick={() => getValue("+")} />
          </td>
        </tr>
      </table>
    </form>
  );
}
