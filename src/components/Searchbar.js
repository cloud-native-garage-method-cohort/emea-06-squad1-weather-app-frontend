import React, { useState } from 'react';
import { Button, TextInput } from 'carbon-components-react';

const Searchbar = ({ onSearch }) => {
  const [input, setInput] = useState('');
  const onChange = (e) => setInput(e.target.value);
  const onClick = () => onSearch(input.toLowerCase());

  // Enables search with enter if input is focused
  const onKeyDown = (e) => {
    if (e.key !== 'Enter') return;

    onSearch(input);
  };

  return (
    <div className="search-bar">
      <TextInput
        id="search-bar-input"
        labelText="" // No Label needed
        className="search-bar-input"
        onChange={onChange}
        onKeyDown={onKeyDown}
        placeholder="Type in a city, e.g. London"
      />
      <Button
        id="search-bar-button"
        className="search-bar-button"
        onClick={onClick}
      >
        Search
      </Button>
    </div>
  );
};

export default Searchbar;
