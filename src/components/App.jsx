import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { List } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { Container, Title, TitleContacts } from './App.styled';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  updateFilter = newFilter => {
    this.setState({
      filter: newFilter,
    });
  };

  deleteItem = itemId => {
    this.setState(prevState => {
      return {
        contacts: prevState.contacts.filter(item => item.id !== itemId),
      };
    });
  };

  addItem = newContact => {
    if (
      this.state.contacts.some(
        contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
      )
    ) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      this.setState(prevState => ({
        contacts: [...prevState.contacts, { ...newContact, id: nanoid() }],
      }));
    }
  };

  render() {
    const { contacts, filter } = this.state;
    const filteredItem = contacts.filter(item => {
      const hasName = item.name.toLowerCase().includes(filter.toLowerCase());
      return hasName;
    });
    return (
      <Container>
        <Title>Phonebook</Title>
        <ContactForm onAdd={this.addItem} />
        <TitleContacts>Contacts</TitleContacts>
        <SearchBar filter={filter} onUpdateFilter={this.updateFilter} />
        {filteredItem.length > 0 && (
          <List contacts={filteredItem} onDelete={this.deleteItem} />
        )}
        <GlobalStyle />
      </Container>
    );
  }
}
