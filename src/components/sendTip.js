import { WalletFilled, CaretDownOutlined } from "@ant-design/icons";
import { Avatar, Input, Button, Flex } from "antd";
import style from "./sendTip.module.scss";
import { useState } from "react";

export default function SendTip(props) {
  const { icon, unit, setIsSuccess } = props;

  const [inputValue, setInputValue] = useState("");
  const [textAreaValue, setTextAreaValue] = useState("");
  const handleKeyPress = (key) => {
    setInputValue((preKey) => preKey + key);
  };
  const handleBackspace = () => {
    setInputValue((preInput) => preInput.slice(0, -1));
  };
  const handleSubmit = () => {
    if (inputValue === "") {
      alert(`Hãy nhập số tiền tip`);
    } else {
      setIsSuccess(true);
      alert(`Số tiền tip là ${inputValue} và có note là ${textAreaValue}`);
    }
  };
  const { TextArea } = Input;
  const onChange = (e) => {
    setTextAreaValue(e.target.value);
  };
  return (
    <>
      <div className={style.tipContainer}>
        <div className={style.userInfo}>
          <Avatar
            src="https://api.dicebear.com/7.x/miniavs/svg?seed=1"
            className={style.userInfo__avatar}
          />
          <span>Send to</span>
          <a href="/">@azuchi</a>
        </div>
        <div className={style.tipContainer__input}>
          <Input
            value={inputValue}
            placeholder=""
            variant="borderless"
            className={style.tipContainer__field}
          />
          <span>{unit}</span>
        </div>
        <TextArea
          value={textAreaValue}
          showCount
          maxLength={48}
          onChange={onChange}
          placeholder="Note here ..."
          className={style.tipContainer__textArea}
          style={{ resize: "none" }}
        />
        <div className={style.tipContainer__balance}>
          <img src={icon} alt="" />
          <div className={style.tipContainer__balanceDetail}>
            <div>
              {unit} Balance
              <CaretDownOutlined className={style.tipContainer__balanceIcon} />
            </div>
            <span>250 {unit}</span>
          </div>
        </div>
        <Button
          onClick={handleSubmit}
          size="large"
          shape="round"
          block
          className={style.tipContainer__button}
          icon={<WalletFilled />}>
          Send {unit}
        </Button>
      </div>
      <Flex wrap="wrap" gap="small" className={style.tipKeyboard}>
        <Button
          onClick={() => handleKeyPress("1")}
          className={style.tipKeyboard__button}>
          1
        </Button>
        <Button
          onClick={() => handleKeyPress("2")}
          className={style.tipKeyboard__button}>
          2 <span className={style.tipKeyboard__button_word}>ABC</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("3")}
          className={style.tipKeyboard__button}>
          3<span className={style.tipKeyboard__button_word}>DEF</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("4")}
          className={style.tipKeyboard__button}>
          4<span className={style.tipKeyboard__button_word}>GHI</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("5")}
          className={style.tipKeyboard__button}>
          5<span className={style.tipKeyboard__button_word}>JKL</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("6")}
          className={style.tipKeyboard__button}>
          6<span className={style.tipKeyboard__button_word}>MNO</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("7")}
          className={style.tipKeyboard__button}>
          7<span className={style.tipKeyboard__button_word}>PQRS</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("8")}
          className={style.tipKeyboard__button}>
          8<span className={style.tipKeyboard__button_word}>TUV</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("9")}
          className={style.tipKeyboard__button}>
          9<span className={style.tipKeyboard__button_word}>WXYZ</span>
        </Button>
        <Button
          onClick={() => handleKeyPress("0")}
          className={style.tipKeyboard__button}>
          0
        </Button>
        <Button
          onClick={() => handleBackspace()}
          className={style.tipKeyboard__button}>
          &larr;
        </Button>
      </Flex>
    </>
  );
}
