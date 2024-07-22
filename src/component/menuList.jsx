import React from "react";
import MenuItem from "./menuItem"; // Importing MenuItem component
import "./styles.css"; // Import your CSS file

function MenuList({ list = [] }) {
  // Render the list of menu items
  return (
    <ul className="menu-list-container">
      {list?.length > 0 && // Check if the list has items
        list.map((listItem, index) => (
          <MenuItem key={index} item={listItem} /> // Render MenuItem for each item in the list
        ))}
    </ul>
  );
}

export default MenuList;
