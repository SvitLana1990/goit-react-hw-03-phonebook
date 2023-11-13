import { Component } from 'react';
import { GlobalStyle } from '../GlobalStyle';
import { SearchBar } from './SearchBar/SearchBar';
import { List } from './ContactList/ContactList';
import { ContactForm } from './Form/Form';
import { nanoid } from 'nanoid';
import { Container, Title, TitleContacts } from './App.styled';

const storageKey = 'contacts';

export class App extends Component {
  state = {
    contacts: [],
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

componentDidMount() {
  const savedContacts = window.localStorage.getItem(storageKey);
  if (savedContacts !== null) {
    this.setState({contacts: JSON.parse(savedContacts)})
  }
}

componentDidUpdate(prevProps, prevState) {
  if (prevState.contacts !== this.state.contacts) {
    window.localStorage.setItem(storageKey, JSON.stringify(this.state.contacts));
  }
}

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
