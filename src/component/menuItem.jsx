import React, { useState } from "react";
import MenuList from "./menuList"; // Assuming this imports a component to render child items
import { FaMinus, FaPlus } from "react-icons/fa"; // Importing icons for toggle buttons

function MenuItem({ item }) {
  // State to track which children are currently displayed
  const [displayCurrentChildren, setDisplayCurrentChildren] = useState({});

  // Function to toggle visibility of children when toggle button is clicked
  function handleToggleChildren(getCurrentLabel) {
    // Toggle the state for the current item's label
    setDisplayCurrentChildren({
      ...displayCurrentChildren, // Preserve existing state
      [getCurrentLabel]: !displayCurrentChildren[getCurrentLabel], // Toggle the current label's visibility
    });
  }

  // Log the current state for debugging
  console.log(displayCurrentChildren);

  return (
    <li>
      {/* Container for the menu item */}
      <div className="menu-item">
        {/* Display the label of the current item */}
        <p>{item.label}</p>
        {/* Render toggle button if item has children */}
        {item && item.children && item.children.length ? (
          <span onClick={() => handleToggleChildren(item.label)}>
            {/* Show different icon based on current visibility state */}
            {displayCurrentChildren[item.label] ? (
              <FaMinus color="#fff" size={25} />
            ) : (
              <FaPlus color="#fff" size={25} />
            )}
          </span>
        ) : null}
      </div>

      {/* Render children items if they exist and are visible */}
      {item &&
      item.children &&
      item.children.length > 0 &&
      displayCurrentChildren[item.label] ? (
        <MenuList list={item.children} /> // Assuming MenuList component renders child items
      ) : null}
    </li>
  );
}

export default MenuItem;
