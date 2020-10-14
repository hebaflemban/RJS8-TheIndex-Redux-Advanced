import React, { useState } from "react";
import { withRouter } from "react-router-dom";

// Components
import BookTable from "./BookTable";
import Loading from "./Loading";

//Route
import { useParams } from "react-router-dom";

//redux
import { connect } from "react-redux";

const AuthorDetail = (props) => {
  const { authorID } = useParams();
  const author = props.authors.find((author) => author.id == authorID);
  console.log("i'm from AuthorDetail", author, authorID);

  const books = props.books.filter((book) => author.books.includes(book.id));

  // author.books = author.books.map((id) =>
  //   props.books.find((book) => book.id === id)
  // );

  const [loading] = useState(false);
  console.log("i'm from AuthorDetail filtered books ", author);

  if (loading) {
    return <Loading />;
  } else {
    const authorName = `${author.first_name} ${author.last_name}`;
    return (
      <div className="author">
        <div>
          <h3>{authorName}</h3>
          <img
            src={author.imageUrl}
            className="img-thumbnail img-fluid"
            alt={authorName}
          />
        </div>
        <BookTable books={books} />
      </div>
    );
  }
};

const mapStateToProps = (state) => {
  return {
    authors: state.rootAuthors.authors,
    books: state.rootBooks.books,
  };
};

export default withRouter(connect(mapStateToProps)(AuthorDetail));
