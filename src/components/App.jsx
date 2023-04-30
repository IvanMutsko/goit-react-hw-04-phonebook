import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import { formatterNumber } from '../utils/formatterNumber';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

const initialContacts = [
  { id: nanoid(), name: 'Rosie Simpson', number: '459-12-56' },
  { id: nanoid(), name: 'Hermione Kline', number: '443-89-12' },
  { id: nanoid(), name: 'Eden Clements', number: '645-17-79' },
  { id: nanoid(), name: 'Annie Copeland', number: '227-91-26' },
];

class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  componentDidMount() {
    const contactsFromStorage = JSON.parse(localStorage.getItem('contacts'));

    if (contactsFromStorage) {
      this.setState({ contacts: contactsFromStorage });
      return;
    }
    this.setState({ contacts: initialContacts });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.contacts !== prevState.contacts) {
      localStorage.setItem('contacts', JSON.stringify(this.state.contacts));
    }
  }

  onAddContact = data => {
    const { name, number } = data;

    const isContainName = this.state.contacts.some(
      contactName =>
        contactName.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isContainName) {
      alert(`${name} is already in contacts.`);
      return;
    }
    this.setState(prevState => {
      const newContactList = [...prevState.contacts];

      newContactList.push({
        id: nanoid(),
        name: name,
        number: formatterNumber(number),
      });
      return { contacts: newContactList };
    });
  };

  deleteContact = id => {
    this.setState(prevState => ({
      contacts: prevState.contacts.filter(contact => contact.id !== id),
    }));
  };

  onChangeFilterInput = evt => {
    const { value } = evt.currentTarget;

    this.setState({
      filter: value,
    });
  };

  filteredContactsList = () => {
    const { contacts, filter } = this.state;

    const filteredContacts = contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );

    return filteredContacts;
  };

  render() {
    return (
      <>
        <div>
          <h1>Phonebook</h1>
          <ContactForm onAddContact={this.onAddContact} />

          <h2>Contacts</h2>

          {this.state.contacts.length === 0 ? (
            <p>
              Sorry, but you don't have any contacts yet. Add your first
              contact.
            </p>
          ) : (
            <>
              <Filter onChangeFilterInput={this.onChangeFilterInput} />
              <ContactList
                contacts={this.filteredContactsList()}
                onDeleteContact={this.deleteContact}
              />
            </>
          )}
        </div>
      </>
    );
  }
}

export default App;
