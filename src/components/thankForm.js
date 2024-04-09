import { Button } from "antd";
import { SendOutlined } from "@ant-design/icons";
import style from "./thankForm.module.scss";
export default function ThankForm() {
  return (
    <>
      <div className={style.thankForm}>
        <h1>Thank you!</h1>
        <p>FOR YOUR TIPS</p>
        <img className={style.thankForm__img} src="./Thankyou.jpg" />
        <Button
          shape="round"
          className={style.thankForm__button}
          icon={<SendOutlined />}>
          Message me
        </Button>
        <a href="/">Back to Home</a>
      </div>
    </>
  );
}
