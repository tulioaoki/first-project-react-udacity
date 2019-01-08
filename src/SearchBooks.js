import React from 'react'
import './App.css'
import { Link } from "react-router-dom";
import * as BooksAPI from "./BooksAPI";
import ListSearchBooks from "./ListSearchBooks";

class SearchBooks extends React.Component {

    state = {
        booksSearched:[],
        query: '',
    };

    searchForBooks(){
        BooksAPI.search(this.state.query).then((books) => (this.setState({booksSearched:books})));
    }

    updateQuery = (query) => {
        this.setState(() => ({
            query: query.trim()
        }));
        if (query === '' || query === null){
            this.setState({booksSearched:[]})
        }else {
            this.searchForBooks(this.state.query);
        }
    };

    render(){
        return(

            <div className="search-books">
                <div className="search-books-bar">
                    <Link to='/'>
                        <button className="close-search">Close</button>
                    </Link>
                    <div className="search-books-input-wrapper">
                        <input
                            type="text"
                            placeholder="Search by title or author"
                            value={this.state.query}
                            onEmptied={() => this.setState({booksSearched:[]})}
                            onChange={(event) => this.updateQuery(event.target.value)}
                        />
                    </div>
                </div>
                <div className="search-books-results">
                    <ListSearchBooks
                        books={this.state.booksSearched}
                        changeShelf={this.props.changeShelf}
                        getBookShelf={this.props.getBookShelf}
                    />
                </div>
            </div>
        )
    }
}
//
//
export default SearchBooks;