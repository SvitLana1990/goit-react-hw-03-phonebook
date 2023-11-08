import { Item } from 'components/ContactItem/ContactItem';
import { ContactList } from './ContactList.styled';

export const List = ({ contacts, onDelete }) => {
  return (
    <ContactList>
      {contacts.map(item => (
        <Item
          key={item.id}
          id={item.id}
          name={item.name}
          number={item.number}
          onDelete={onDelete}
        />
      ))}
    </ContactList>
  );
};
