import React from 'react'
import * as BooksAPI from './BooksAPI'
import './App.css'
import ListBooks from "./ListBooks";
import { Route} from 'react-router-dom'
import SearchBooks from "./SearchBooks";
import {update} from "./BooksAPI";
import SearchButton from "./SearchButton"
import RenderHeader from "./RenderHeader";

class BooksApp extends React.Component {
  state = {
    books : [],
    value: '',
  };

  updateState(){
      BooksAPI.getAll().then((books) => (this.setState({books:books})));
  }

  componentDidMount() {
      BooksAPI.getAll().then((books) => (this.setState({books:books})));
  }

  changeShelf = (value, book) => (
      update(book, value).then(this.updateState())
  );

  returnBookShelf(id){
      for (const book of this.state.books){
          if(book.id === id){
              return book.shelf
          }
      }
      return null;
  }
  getBookShelf = (id) => (
      this.returnBookShelf(id)
  );

  render() {
    return (
        <div>
            <Route exact path='/' render={() =>(
                <div className='main-page'>
                    <RenderHeader/>
                    <ListBooks books={this.state.books} changeShelf={this.changeShelf}/>
                    <SearchButton/>
                </div>
            )}/>
            <Route path='/search' render={({history}) => (
                <SearchBooks getBookShelf={this.getBookShelf} changeShelf={this.changeShelf}/>
            )}/>
        </div>
    )
  }
}

export default BooksApp
