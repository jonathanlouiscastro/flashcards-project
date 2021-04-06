import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { deleteDeck, listDecks } from "../utils/api/index";
// A component that lists the deck items used by DisplayCards
export default function ListDeckItems() {
  const [decks, setDecks] = useState([]);
  useEffect(() => {
    const abortController = new AbortController();
    async function loadDeck (){
      try {
        const response = await listDecks(abortController.signal)
        setDecks(response);
      } catch (error) {
        if (error.name === "AbortError") {
          console.log("Aborted", decks);
        } else {
          throw error;
        }
      }
    }
    loadDeck();
    return () => {
      abortController.abort();
    }
  },[]);

  return (
    <section>
      {decks.map((deck, index) => {
        return (
          <div key={index} className="card my-3">
            <div className="card-body">
              <h5 className="card-title">
                {deck.name}
                <span className="float-right">{`${deck.cards.length} cards`}</span>
              </h5>
              <p className="card-text">{deck.description}</p>
              <div>
                <Link to={`/decks/${deck.id}`} className="btn btn-secondary">
                  View
                </Link>
                <Link
                  to={`/decks/${deck.id}/study`}
                  className="btn btn-primary mx-2"
                >
                  Study
                </Link>
                <span className="float-right">
                  <button
                    className="btn btn-danger"
                    onClick={() =>
                      window.confirm("Confirm Delete?")
                        ? deleteDeck(deck.id)
                        : null
                    }
                  >
                    Delete
                  </button>
                </span>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
