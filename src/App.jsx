import React from 'react';
import './App.scss';

import ContactsList from './components/ContactsList/ContactsList.jsx';
import Search from './components/Search/Search.jsx';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      searchText: '',
      users: []
    };
  }

  onChangeHandle(event) {
    console.log(event);
    //this.setState({searchText: event.target.value});
  }

  onSubmit(event) {
    event.preventDefault();
    const {searchText} = this.state;
    const url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({users: responseJson.items}));
  }

  render() {
    return (
      <div>
        <Search onChangeHandle={this.onChangeHandle} onSubmit={this.onSubmit} />
        <ContactsList users={this.state.users}/>
      </div>
    );
  }
}

export default App;
