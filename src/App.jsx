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

  onChangeHandle = e => {
    this.setState({searchText: e});
  }

  onSubmit = (e) => {
    e.preventDefault();
    const {searchText} = this.state;
    const url = `https://api.github.com/search/users?q=${searchText}`;
    fetch(url)
      .then(response => response.json())
      .then(responseJson => this.setState({users: responseJson.items}));
  }

  render() {
    let {users} = this.state;
    return (
      <div className="app">
        <Search onChangeHandle={this.onChangeHandle} onSubmit={this.onSubmit} />
        <ul className="contact-list">
          {users.map(user => <ContactsList key={user.id} user={user} />)}
        </ul>
      </div>
    );
  }
}

export default App;
