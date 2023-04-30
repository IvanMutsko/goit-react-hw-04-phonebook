import { useState, useEffect } from 'react';
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

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(window.localStorage.getItem('contacts')) ?? initialContacts
  );

  const [filter, setFilter] = useState('');

  useEffect(() => {
    window.localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const onAddContact = data => {
    const { name, number } = data;

    const isContainName = contacts.some(
      contactName =>
        contactName.name.toLocaleLowerCase() === name.toLocaleLowerCase()
    );

    if (isContainName) {
      alert(`${name} is already in contacts.`);
      return;
    }

    setContacts(contacts => {
      const newContactList = [...contacts];

      newContactList.push({
        id: nanoid(),
        name: name,
        number: formatterNumber(number),
      });
      return newContactList;
    });
  };

  const deleteContact = id => {
    setContacts(contacts.filter(contact => contact.id !== id));
  };

  const onChangeFilterInput = evt => {
    const { value } = evt.currentTarget;

    setFilter(value);
  };

  const filteredContactsList = (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  return (
    <>
      <div>
        <h1>Phonebook</h1>
        <ContactForm onAddContact={onAddContact} />

        <h2>Contacts</h2>

        {contacts.length === 0 ? (
          <p>
            Sorry, but you don't have any contacts yet. Add your first contact.
          </p>
        ) : (
          <>
            <Filter onChangeFilterInput={onChangeFilterInput} />
            <ContactList
              contacts={filteredContactsList(contacts, filter)}
              onDeleteContact={deleteContact}
            />
          </>
        )}
      </div>
    </>
  );
};
