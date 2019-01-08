import React from 'react'
import './App.css'
import ShowSearchedBooks from './ShowSearchedBooks'

class ListSearchBooks extends React.Component {
    render(){
        return(
            <div className='ListSearchBooks'>
                <ShowSearchedBooks name='SearchResults'
                                   type='none'
                                   books={this.props.books}
                                   changeShelf={this.props.changeShelf}
                                   getBookShelf={this.props.getBookShelf}
                />
            </div>
        )
    }
}
//
//
export default ListSearchBooks;