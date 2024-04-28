import React, { useState } from 'react';

const SearchBar = () => {
  const [selectedLocation, setSelectedLocation] = useState('A');

  const handleLocationChange = (location) => {
    setSelectedLocation(location);
  };

  return (
    <div>
      <div>
        <label htmlFor="location">Location:</label>
        <button onClick={() => handleLocationChange('A')}>A</button>
        <button onClick={() => handleLocationChange('B')}>B</button>
        <button onClick={() => handleLocationChange('C')}>C</button>
      </div>
      <div>
        <label htmlFor="ToolType">Tool Type:</label>
        <select
          id="location"
          value={selectedLocation}
          onChange={(e) => handleLocationChange(e.target.value)}
        >
          <option value="A">A</option>
          <option value="B">B</option>
          <option value="C">C</option>
        </select>
      </div>
    </div>
  );
};

export default SearchBar;
