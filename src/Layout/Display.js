import React from "react";
import { Link } from "react-router-dom";
import ListDeckItems from "./ListDeckItems";
//Displays the deck items
export default function Display() {
  return (
    <div>
      <div>
        <Link to="/decks/new" className="btn btn-secondary m-3">
          Create Deck
        </Link>
      </div>
      <div className="container">
        <ListDeckItems />
      </div>
    </div>
  );
}


