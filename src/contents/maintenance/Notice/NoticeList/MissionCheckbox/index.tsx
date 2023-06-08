import React, { useState } from "react";

const CheckboxList = () => {
  const [items, setItems] = useState([
    { id: 1, label: "Item 1", checked: false },
    { id: 2, label: "Item 2", checked: false },
    { id: 3, label: "Item 3", checked: false },
    { id: 4, label: "Item 4", checked: false }
  ]);

  const handleCheckboxChange = (itemId: number) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, checked: !item.checked } : item
      )
    );
  };

  const handleSelectAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: true }))
    );
  };

  const handleDeselectAll = () => {
    setItems((prevItems) =>
      prevItems.map((item) => ({ ...item, checked: false }))
    );
  };

  return (
    <div>
      <div>
        <label>
          <input
            type="checkbox"
            checked={items.every((item) => item.checked)}
            onChange={
              items.every((item) => item.checked)
                ? handleDeselectAll
                : handleSelectAll
            }
          />
          Select All
        </label>
      </div>
      {items.map((item) => (
        <div key={item.id}>
          <label>
            <input
              type="checkbox"
              checked={item.checked}
              onChange={() => handleCheckboxChange(item.id)}
            />
            {item.label}
          </label>
        </div>
      ))}
    </div>
  );
};

export default CheckboxList;
