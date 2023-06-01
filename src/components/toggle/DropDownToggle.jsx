import React, { useState } from 'react';
import './toggle.css'

const DropDownToggle = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button onClick={toggleDropdown} className="tog">
        <div className="img"></div>
      </button>
      {isOpen && (
        <div>
          {/* Dropdown Content */}
          <p>Option 1</p>
          <p>Option 2</p>
          <p>Option 3</p>
        </div>
      )}
    </div>
  );
};

export default DropDownToggle;
