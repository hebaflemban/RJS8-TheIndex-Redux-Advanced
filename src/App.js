import React, { useState } from "react";
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";

// Components
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import AuthorsList from "./AuthorsList";
import AuthorDetail from "./AuthorDetail";
import BookList from "./BookList";

const App = (props) => {
  const [loading] = useState(false);

  const getView = () => {
    if (loading) {
      return <Loading />;
    } else {
      return (
        <Switch>
          <Redirect exact from="/" to="/authors" />
          <Route path="/authors/:authorID">
            <AuthorDetail />
          </Route>
          <Route path="/authors/">
            <AuthorsList authors={props.authors} />
          </Route>
          <Route path="/books/:bookColor?">
            <BookList books={props.books} />
          </Route>
        </Switch>
      );
    }
  };

  return (
    <div id="app" className="container-fluid">
      <div className="row">
        <div className="col-2">
          <Sidebar />
        </div>
        <div className="content col-10">{getView()}</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    authors: state.rootAuthors.authors,
    books: state.rootBooks.books,
  };
};

export default withRouter(connect(mapStateToProps)(App));
