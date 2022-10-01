import React from "react";
import "./Cart.css";

const Cart = (props) => {
  const cart = props.cart;
  let total = 0;
  for (let i = 0; i < cart.length; i++) {
    const player = cart[i];
    total = total + player.salary;
  }
  return (
    <aside className="cart block">
      <h2 style={{ color: "green" }}>My Team</h2>
      <div>{cart.length === 0 && <div>Team Player Is Empty</div>}</div>
      <div>Team Player: {cart.length}</div>

      {cart.map((player) => (
        <div className="row align-items-start" key={cart.id}>
          <div className="col">
            <p>Player Name: {player.name}</p>
          </div>
          <div className="col">
            <p>Transfer Cost: ${player.salary}</p>
          </div>
        </div>
      ))}

      {Cart.length !== 0 && (
        <>
          <hr></hr>
          <div className="">
            <strong>Total Transfer Cost: ${total}</strong>
          </div>
        </>
      )}
    </aside>
  );
};

export default Cart;
