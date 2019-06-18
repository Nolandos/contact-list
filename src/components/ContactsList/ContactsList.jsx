import React from 'react';

class ContactsList extends React.Component {

    render() {
        const {html_url, avatar_url, login} = this.props.user;
        return (
            <li>
                <img src={avatar_url} style={{maxWidth: '100px'}}></img>
                <a href={html_url} target="_blank">{login}</a>
            </li>
        )
    }
 }

export default ContactsList;
