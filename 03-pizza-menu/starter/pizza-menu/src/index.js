import React from "react";
import ReactDOM from "react-dom/client";
import { pizzaData } from "./data";
import "./index.css";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  const redHeader = {
    color: "red",
    fontSize: "36px",

    textTransform: "uppercase",
  };
  return (
    <header className="header footer">
      <h1 style={redHeader}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. {numPizzas} creative dishes to choose
            from. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come visit us later.</p>
      )}

      {/* 
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, spinach, and ricotta cheese"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
  */}
    </main>
  );
}

function Pizza({ pizzaObj }) {
  // remove sold out item
  // if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>

        <span>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer(props) {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = openHour <= hour && closeHour >= hour;
  //   if (openHour <= hour && closeHour >= hour) alert("We're currently open!");
  //   else alert("Sorry, we go sleep sleep");
  /*
  if (isOpen) {
    return (
      <p>
        We're happy to welcome you between {openHour}:00 until {closeHour}
        :00.
      </p>
    );
  }*/
  return (
    <footer className="footer">
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <div className="order">
          <p>
            We're happy to welcome you between {openHour}:00 until {closeHour}
            :00.
          </p>
        </div>
      )}
    </footer>
    //   return React.createElement("footer", null, "We're currently open!");
  );
}

function Order({ closeHour, openHour }) {
  return (
    <div className="order">
      <p>
        We're currently open from {openHour}:00 until {closeHour}:00. Come visit
        us or order online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
