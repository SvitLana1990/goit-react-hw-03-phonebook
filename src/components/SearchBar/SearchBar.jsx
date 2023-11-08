import { Input } from './SearchBar.styled';

export const SearchBar = ({ filter, onUpdateFilter }) => {
  return (
    <Input
      type="text"
      name="name"
      value={filter}
      onChange={event => onUpdateFilter(event.target.value)}
      placeholder="Find contacts by name"
      required
    />
  );
};
