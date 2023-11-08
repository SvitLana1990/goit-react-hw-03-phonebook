import { ContactInfo, ContactItem, DeleteButton } from './ContactItem.styled';

export const Item = ({ name, number, id, onDelete }) => {
  return (
    <ContactItem>
      <ContactInfo>
        {name}: {number}
      </ContactInfo>
      <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
    </ContactItem>
  );
};
