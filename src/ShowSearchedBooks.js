import React from 'react'
import './App.css'


class ShowSearchedBooks extends React.Component {
    render() {
        const {books} = this.props;
        return (
            <div className="list-books-content">
                <div>
                    <div className="bookshelf">
                        <h2 className="bookshelf-title">{this.props.name}</h2>
                        <ol className='books-grid'>
                            { books && books.length > 0 &&  books[0].title ? books.map((book, index) => (
                                  (
                                    <li key={book.id}>
                                        <div className="book">
                                            <div className="book-top">
                                                <div className="book-cover" style={{
                                                    width: 128,
                                                    height: 193,
                                                    backgroundImage: book.imageLinks ? 'url("' +  book.imageLinks.thumbnail + '")' : null
                                                }}/>
                                                <div className="book-shelf-changer">
                                                    <select value={this.props.getBookShelf(book.id) !== null? this.props.getBookShelf(book.id) : 'none' } onChange={ ((e) => this.props.changeShelf(e.target.value, book, index))}>
                                                        <option value="move" disabled>Move to...</option>
                                                        <option value="currentlyReading">Currently Reading</option>
                                                        <option value="wantToRead">Want to Read</option>
                                                        <option value="read">Read</option>
                                                        <option value="none">None</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="book-title">{book.title}</div>
                                            <div className="book-authors">{book.authors ? book.authors[0]: 'Unknown'}</div>
                                        </div>
                                    </li>
                                )
                            )):<div>
                                <h1>No books found.</h1>
                            </div>}
                        </ol>
                    </div>
                </div>
            </div>
        )
    }
}


export default ShowSearchedBooks;