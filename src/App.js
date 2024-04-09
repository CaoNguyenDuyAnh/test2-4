import style from "./App.module.scss";
import { FaArrowLeftLong } from "react-icons/fa6";
import { WalletFilled, CaretDownOutlined } from "@ant-design/icons";
import SendTip from "./components/sendTip";
import { useState } from "react";
import ThankForm from "./components/thankForm";

function App() {
  const [isSuccess, setIsSuccess] = useState(false);
  const [tab, setTab] = useState("ton");
  // const dataTest = [
  //   {
  //     id: 1,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 2,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 3,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 4,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 5,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 6,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 7,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 8,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  //   {
  //     id: 9,
  //     icon: "./Ellipse 1019.png",
  //     title: "Uniswap",
  //   },
  // ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className={style.App}>
        <div className={style.main}>
          <header className={style.header}>
            <img className={style.logo} src="./logo.png" alt="logo" />
            <h3>{isSuccess ? "Moons.so" : "Send tip"}</h3>
            <FaArrowLeftLong
              onClick={() => {
                setIsSuccess(false);
              }}
              className={style.header__icon}
            />
          </header>
          {/* <div className={style.content}>
            <h3>Join to earn</h3>
            <p>
              Join & control your own community in Moons decentralize crypto
              community.
            </p>
          </div>
          <div className={style.wrapper}>
            <div className={style.container}>
              {dataTest.map((item) => (
                <Card
                  id={item.id}
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                  setValue={setValue}
                  valueData={value}
                />
              ))}
            </div>
            <button onClick={handleSubmit} className={style.active__button}>
              Continue
              <FaArrowRightLong className={style.active__button_icon} />
            </button>
          </div> */}
          {/* phần code của bài test 2/4 */}
          {isSuccess ? (
            <ThankForm />
          ) : (
            <div className={style.content}>
              <div className={style.tabs}>
                <button
                  onClick={() => {
                    setTab("ton");
                  }}
                  className={`${style.tabButton} ${
                    tab === "ton" ? style.tabButtonActive : ""
                  } `}>
                  <WalletFilled className={style.tabButton__icon} />
                  Ton Wallet
                </button>
                <button
                  onClick={() => {
                    setTab("moons");
                  }}
                  className={`${style.tabButton} ${
                    tab === "moons" ? style.tabButtonActive : ""
                  } `}>
                  <WalletFilled className={style.tabButton__icon} />
                  Moons Wallet
                </button>
              </div>
              {tab === "ton" ? (
                <SendTip
                  setIsSuccess={setIsSuccess}
                  icon="Group34074.png"
                  unit="TON"
                />
              ) : (
                <></>
              )}
              {tab === "moons" ? (
                <SendTip
                  setIsSuccess={setIsSuccess}
                  icon="Group24(1).png"
                  unit="MOONS"
                />
              ) : (
                <></>
              )}
            </div>
          )}
          {/* <ThankForm /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
