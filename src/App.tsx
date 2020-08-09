import React from "react";
import "./App.css";
import Board from "./components/Board";
import Card from "./components/Card";

function App() {
  return (
    <div className='App'>
      <main className='flexbox'>
        <Board id='board-1' classNames='board'>
          <Card id='card-1' classNames='card' draggable='true'>
            <p>Card One</p>
          </Card>
        </Board>
        <Board id='board-2' classNames='board'>
          <Card id='card-2' classNames='card' draggable='true'>
            <p>Card One</p>
          </Card>
        </Board>
      </main>
    </div>
  );
}

export default App;
