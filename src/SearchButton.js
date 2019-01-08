import {Link} from "react-router-dom";
import React from "react";
import './App.css'

class SearchButton extends React.Component {
    render(){
        return(
            <div className="open-search">
                <Link to='/search' className='open-search'>
                    <button>Add a book</button>
                </Link>
            </div>
        )
    }
}

export default SearchButton;
