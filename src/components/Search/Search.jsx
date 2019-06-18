import React from 'react';

class Search extends React.Component {
    constructor(props) {
        super(props);
        this.state = {searchingText: ''};
    }

    handleChange = e => {
        let searchingText = e.target.value;
        this.setState({searchingText: searchingText});
        if (searchingText.length > 2) {
            this.props.onChangeHandle(searchingText);
        }
    } 

    render() {
       return (
         <form onSubmit={event => this.props.onSubmit(event)}>
            <label htmlFor="searchText">Search by user name</label>
            <input
                type="text"
                id="searchText"
                onChange={this.handleChange}
                value={this.state.searchText}/>
        </form>
       );
    }
}

export default Search;