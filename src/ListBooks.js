import React from 'react'
import './App.css'
import ShowBooks from './ShowBooks'

class ListBooks extends React.Component {
    render(){
        return(
            <div className='ListBooks'>
                <ShowBooks name='Want to Read' type='wantToRead' books={this.props.books} changeShelf={this.props.changeShelf}/>
                <ShowBooks name='Read' type='read' books={this.props.books} changeShelf={this.props.changeShelf}/>
                <ShowBooks name='CurrentlyReading' type='currentlyReading' books={this.props.books} changeShelf={this.props.changeShelf}/>
            </div>
        )
    }
}
//
//
export default ListBooks;