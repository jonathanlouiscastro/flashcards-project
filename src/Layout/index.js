import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import Header from "./Header";
import NotFound from "./NotFound";
import Display from "./Display";
import Form from "./Form";
import StudyDeck from "./StudyDeck";
import Deck from "./Deck";

//The application routes 
function Layout() {
  return (
    <Fragment>
      <Header />
      <div className="container">
      <Switch>
          <Route exact path="/">
            <Display />
          </Route>
          <Route path="/decks/:deckId/study">
            <StudyDeck />
          </Route>
          <Route path="/decks/new">
            <Form newItem={true} isDeck={true} />
          </Route>
          <Route exact path="/decks/:deckId">
            <Deck />
          </Route>
          <Route path="/decks/:deckId/edit">
            <Form newItem={false} isDeck={true} />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <Form newItem={true} isDeck={false} />
          </Route>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <Form newItem={false} isDeck={false} />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </Fragment>
  );
}

export default Layout;
