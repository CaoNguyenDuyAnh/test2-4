import "./App.scss";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import Card from "./components/card";
import { useState } from "react";
function App() {
  const handleSubmit = () => {
    const selectedItem = value.join(", ");
    alert(`Các item được chọn là ${selectedItem}`);
  };
  const [value, setValue] = useState([]);
  const dataTest = [
    {
      id: 1,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 2,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 3,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 4,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 5,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 6,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 7,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 8,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
    {
      id: 9,
      icon: "./Ellipse 1019.png",
      title: "Uniswap",
    },
  ];
  return (
    <div style={{ display: "flex", justifyContent: "center" }}>
      <div className="App">
        <div className="task">
          <header className="header">
            <img className="logo" src="./logo.png" alt="logo" />
            <h3>Onboarding rewards</h3>
            <FaArrowLeftLong className="header__icon" />
          </header>
          <div className="content">
            <h3>Join to earn</h3>
            <p>
              Join & control your own community in Moons decentralize crypto
              community.
            </p>
          </div>
          <div className="wrapper">
            <div className="container">
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
            <button onClick={handleSubmit} className="active__button">
              Continue
              <FaArrowRightLong className="active__button_icon" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
