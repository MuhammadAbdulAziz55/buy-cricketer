import "./App.css";
import Cart from "./Components/Cart/Cart";
import Header from "./Components/Header/Header";
import Players from "./Components/Players-Info/Players";
import playersData from "./Components/fakeData/playersData";
import { useState } from "react";

function App() {
  const first10 = playersData;
  const [players, setPlayers] = useState(first10);
  // const handlePlayer = (plyr) => {
  //   const newCart = [...cart, plyr];
  //   setCart(newCart);
  // };

  const [cart, setCart] = useState([]);

  const handlePlayer = (plyr) => {
    const exist = cart.find((x) => x.id === plyr.id);
    if (exist) {
      setCart(
        cart.map((x) =>
          x.id === plyr.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCart([...cart, { ...plyr, qty: 1 }]);
    }
  };

  // useEffect(() => {
  //   fetch(playersData)
  //     .then((res) => res.json())
  //     .then((data) => console.log(data));
  // }, []);
  return (
    <div>
      <Header></Header>
      <div className="players-container">
        <div className="player-info">
          {players.map((p) => (
            <Players handlePlayer={handlePlayer} player={p}></Players>
          ))}
        </div>
        <div className="cart-info">
          <Cart cart={cart}></Cart>
        </div>
      </div>
    </div>
  );
}

export default App;
