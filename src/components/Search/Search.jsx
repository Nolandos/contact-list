import React from 'react';
import './Search.scss';

class Search extends React.Component {
    
    handleChange = e => {
        let searchingText = e.target.value;
        this.props.onChangeHandle(searchingText);  
    } 

    render() {
       return (
         <form className="search-form" onSubmit={e => this.props.onSubmit(e)}>
            <label htmlFor="searchText">Search by user name</label>
            <input
                type="text"
                id="searchText"
                placeholder="Search..."
                onChange={this.handleChange}
                value={this.searchText}/>
        </form>
       );
    }
}

export default Search;